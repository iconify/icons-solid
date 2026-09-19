import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrnwts-5v.css';
import '../../css/t/t0dn9ubiv.css';

const viewBox = {"width":128,"height":128};
const content = `<g transform="translate(-173.29 -80.936)scale(3.77953)"><rect class="yrnwts-5v"/><path class="t0dn9ubiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:yunohost"} {...others} />);
}

export default Component;
