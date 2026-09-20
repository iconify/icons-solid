import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow_mhd47z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ow_mhd47z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:spray-can-solid"} {...others} />);
}

export default Component;
