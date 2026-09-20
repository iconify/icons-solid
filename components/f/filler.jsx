import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1w8w8b4z.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="h1w8w8b4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:filler"} {...others} />);
}

export default Component;
