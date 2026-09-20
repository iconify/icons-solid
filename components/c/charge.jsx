import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je1y2wbjp.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="je1y2wbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:charge"} {...others} />);
}

export default Component;
