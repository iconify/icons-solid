import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aw_b89bfb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aw_b89bfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:locomotive-variant"} {...others} />);
}

export default Component;
