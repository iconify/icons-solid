import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivh1z7bdr.css';
import '../../css/b/b1k78hpfz.css';
import '../../css/w/wx04sccmw.css';

const viewBox = {"width":128,"height":128};
const content = `<defs><linearGradient id="SVGpKYQeQOh" x1="60.97" x2="60.97" y1="-54.104" y2="167.839" gradientUnits="userSpaceOnUse"><stop offset="0" class="ivh1z7bdr"/><stop offset="1" class="b1k78hpfz"/></linearGradient></defs><path fill="url(#SVGpKYQeQOh)" class="wx04sccmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:binijs"} {...others} />);
}

export default Component;
