import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zm2cquhfj.css';
import '../../css/q/qbiyazbit.css';
import '../../css/x/x2hjr5nlb.css';
import '../../css/c/c60-zuo3b.css';
import '../../css/w/wo5nxbyrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zm2cquhfj"/><path class="qbiyazbit wm-shadow"/><path class="x2hjr5nlb"/><path class="c60-zuo3b"/><path class="wo5nxbyrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:choco-strawberry"} {...others} />);
}

export default Component;
