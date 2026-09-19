import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tzt2nzblv.css';
import '../../css/g/gmgv6en4i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="tzt2nzblv"/><path class="gmgv6en4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:disguised-face"} {...others} />);
}

export default Component;
