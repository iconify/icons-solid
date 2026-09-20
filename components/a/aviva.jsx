import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl59vwg3r.css';

const viewBox = {"width":161,"height":56};
const content = `<path clip-rule="evenodd" class="xl59vwg3r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:aviva"} {...others} />);
}

export default Component;
