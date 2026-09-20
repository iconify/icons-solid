import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0lmd5bjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i0lmd5bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wizard-hat"} {...others} />);
}

export default Component;
