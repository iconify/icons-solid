import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/po7yf1b9e.css';
import '../../css/v/v4h-hybof.css';
import '../../css/v/vm-ee6bas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="po7yf1b9e wm-shadow"/><path class="v4h-hybof"/><path class="vm-ee6bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:table"} {...others} />);
}

export default Component;
