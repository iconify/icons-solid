import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u201ssybh.css';
import '../../css/x/xemrb8bnm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="u201ssybh"/><path class="xemrb8bnm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:building-1"} {...others} />);
}

export default Component;
