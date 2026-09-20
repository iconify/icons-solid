import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihv-_1bbc.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="ihv-_1bbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:collumn"} {...others} />);
}

export default Component;
