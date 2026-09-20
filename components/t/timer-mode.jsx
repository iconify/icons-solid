import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/u/ur5mx2hou.css';
import '../../css/h/hp_dppbrs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ur5mx2hou"/><path class="hp_dppbrs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:timer-mode"} {...others} />);
}

export default Component;
