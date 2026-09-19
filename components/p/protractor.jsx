import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uvnmchr1u.css';
import '../../css/z/z6avml47a.css';
import '../../css/p/pvttq6b9s.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="uvnmchr1u"/><path class="z6avml47a"/><path class="pvttq6b9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:protractor"} {...others} />);
}

export default Component;
