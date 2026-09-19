import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2rk88aae.css';
import '../../css/g/gc7lh6bwa.css';
import '../../css/v/v48dolbdj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="n2rk88aae"/><path class="gc7lh6bwa"/><path class="v48dolbdj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oncoming-fist-dark"} {...others} />);
}

export default Component;
