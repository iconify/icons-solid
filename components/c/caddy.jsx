import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/t/tq_j3q6-k.css';
import '../../css/y/yuqn2cq3m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="tq_j3q6-k"/><path class="yuqn2cq3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:caddy"} {...others} />);
}

export default Component;
