import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmbmkcbbz.css';

const viewBox = {"width":1045.7,"height":85};
const content = `<path class="rmbmkcbbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jaguar-legacy-light"} {...others} />);
}

export default Component;
