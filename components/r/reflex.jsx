import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp0xqacie.css';
import '../../css/y/ycdb5-nqk.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fp0xqacie"/><path class="ycdb5-nqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:reflex"} {...others} />);
}

export default Component;
