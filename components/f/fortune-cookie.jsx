import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znj1-tyyg.css';
import '../../css/u/ukwmuib7w.css';
import '../../css/c/cjhwub58j.css';
import '../../css/h/hcq4uzr_b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="znj1-tyyg"/><path class="ukwmuib7w"/><path class="cjhwub58j"/><path class="hcq4uzr_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fortune-cookie"} {...others} />);
}

export default Component;
