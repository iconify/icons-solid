import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0x3uabab.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g0x3uabab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:table-tennis-solid"} {...others} />);
}

export default Component;
