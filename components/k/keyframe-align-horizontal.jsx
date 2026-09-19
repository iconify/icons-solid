import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hqk3egkyy.css';
import '../../css/s/sy6vzlr6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hqk3egkyy"/><path class="sy6vzlr6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframe-align-horizontal"} {...others} />);
}

export default Component;
