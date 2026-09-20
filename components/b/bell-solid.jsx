import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8r3v9d3w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v8r3v9d3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"rivet-icons:bell-solid"} {...others} />);
}

export default Component;
