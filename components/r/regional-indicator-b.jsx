import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnkwc0bul.css';
import '../../css/b/bc5-xubfs.css';
import '../../css/s/sk_bn9biv.css';
import '../../css/u/u3l-wgboc.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="qnkwc0bul"/><g class="bc5-xubfs"><circle class="sk_bn9biv"/><path class="u3l-wgboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:regional-indicator-b"} {...others} />);
}

export default Component;
