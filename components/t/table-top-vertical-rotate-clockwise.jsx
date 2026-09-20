import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yak3gxrfd.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="yak3gxrfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:table-top-vertical-rotate-clockwise"} {...others} />);
}

export default Component;
