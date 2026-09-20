import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqadkkxff.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="oqadkkxff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:react-wheel-picker-dark"} {...others} />);
}

export default Component;
