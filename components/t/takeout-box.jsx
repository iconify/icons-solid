import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aymu261xn.css';
import '../../css/k/ky_ianb8b.css';
import '../../css/u/u8ufdka5j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="aymu261xn"/><path class="ky_ianb8b"/><path class="u8ufdka5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:takeout-box"} {...others} />);
}

export default Component;
