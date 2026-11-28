import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn0tq4l1f.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="pn0tq4l1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:user-circle-star"} {...others} />);
}

export default Component;
