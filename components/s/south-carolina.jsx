import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr8d5qbcs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cr8d5qbcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:south-carolina"} {...others} />);
}

export default Component;
