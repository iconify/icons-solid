import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1x60zbjh.css';

const viewBox = {"width":55,"height":20};
const content = `<path clip-rule="evenodd" class="i1x60zbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aero-light"} {...others} />);
}

export default Component;
