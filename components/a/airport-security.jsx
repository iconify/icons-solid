import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kcl9qjuqy.css';
import '../../css/b/bfp_z3bis.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="kcl9qjuqy"/><path class="bfp_z3bis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:airport-security"} {...others} />);
}

export default Component;
