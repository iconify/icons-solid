import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozy7hsv8f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ozy7hsv8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:floppy2"} {...others} />);
}

export default Component;
