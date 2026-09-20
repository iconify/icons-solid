import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etsfcbjxk.css';
import '../../css/c/cg17v90sw.css';
import '../../css/g/ghk1tgbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="etsfcbjxk"/><path class="cg17v90sw"/><path class="ghk1tgbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:mark-as-unread"} {...others} />);
}

export default Component;
