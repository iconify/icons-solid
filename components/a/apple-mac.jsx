import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tc03e57gg.css';
import '../../css/v/v_q99t31q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="tc03e57gg"/><path class="v_q99t31q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:apple-mac"} {...others} />);
}

export default Component;
