import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryxl_tbum.css';
import '../../css/x/xka5jqons.css';
import '../../css/x/x7iitf4_b.css';
import '../../css/o/o8wlliifz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ryxl_tbum"/><path class="xka5jqons"/><path class="x7iitf4_b"/><path class="o8wlliifz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:qwik-wordmark"} {...others} />);
}

export default Component;
