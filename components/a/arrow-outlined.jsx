import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htelenzop.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":12,"height":24};
const content = `<defs><path id="SVG1pzpbdYY" class="htelenzop"/></defs><use href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)" class="d2kvgvbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:arrow-outlined"} {...others} />);
}

export default Component;
