import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r7qyef9bu.css';
import '../../css/p/phvugfa-k.css';
import '../../css/p/pmh4rz-uc.css';
import '../../css/s/szady6biz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="r7qyef9bu"/><path class="phvugfa-k"/><path class="pmh4rz-uc"/><path class="szady6biz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:sun-behind-small-cloud"} {...others} />);
}

export default Component;
