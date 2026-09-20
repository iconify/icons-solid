import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orvn8w8cv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="orvn8w8cv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:check-in-circle-filled"} {...others} />);
}

export default Component;
