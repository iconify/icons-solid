import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh7ab-y9b.css';

const viewBox = {"width":344,"height":472};
const content = `<path class="sh7ab-y9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:power-off-setting"} {...others} />);
}

export default Component;
