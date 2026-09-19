import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8rgxcbzb.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="d8rgxcbzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:google-plus-g"} {...others} />);
}

export default Component;
