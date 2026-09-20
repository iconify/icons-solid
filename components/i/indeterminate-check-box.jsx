import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd2gdm8fn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hd2gdm8fn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:indeterminate-check-box"} {...others} />);
}

export default Component;
