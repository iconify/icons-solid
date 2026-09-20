import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/dzelc-e5b.css';
import '../../css/z/zfd2gccjj.css';
import '../../css/c/cmpqosb5j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="dzelc-e5b"/><path class="zfd2gccjj"/><path class="cmpqosb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:dollar-increase"} {...others} />);
}

export default Component;
