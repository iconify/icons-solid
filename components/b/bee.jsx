import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv2yfwb4u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nv2yfwb4u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bee"} {...others} />);
}

export default Component;
