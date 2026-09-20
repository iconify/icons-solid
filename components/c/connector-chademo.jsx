import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xokazl3bh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xokazl3bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:connector-chademo"} {...others} />);
}

export default Component;
