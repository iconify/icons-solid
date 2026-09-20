import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-6iy7wzz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="a-6iy7wzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:quote-right"} {...others} />);
}

export default Component;
