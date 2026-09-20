import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu_2z9bjc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu_2z9bjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:email-open-multiple-outline"} {...others} />);
}

export default Component;
