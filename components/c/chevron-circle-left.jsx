import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isc5-ebbz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="isc5-ebbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:chevron-circle-left"} {...others} />);
}

export default Component;
