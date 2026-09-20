import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7rsbabga.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="e7rsbabga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:vertical-align-bottom"} {...others} />);
}

export default Component;
