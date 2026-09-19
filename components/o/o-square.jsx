import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ir5lyl61v.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="ir5lyl61v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:o-square"} {...others} />);
}

export default Component;
