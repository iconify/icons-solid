import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mah91acmx.css';
import '../../css/u/ujsvax3wi.css';
import '../../css/c/cb6b9pzhv.css';
import '../../css/w/wbslkwlht.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mah91acmx"/><path class="ujsvax3wi"/><path class="cb6b9pzhv"/><path class="wbslkwlht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sparkler"} {...others} />);
}

export default Component;
