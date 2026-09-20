import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6yo2cn0w.css';

const viewBox = {"width":118,"height":27};
const content = `<path class="m6yo2cn0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:paramount-light"} {...others} />);
}

export default Component;
