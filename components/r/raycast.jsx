import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0oa4jz6x.css';

const viewBox = {"width":28,"height":28};
const content = `<path clip-rule="evenodd" class="i0oa4jz6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:raycast"} {...others} />);
}

export default Component;
