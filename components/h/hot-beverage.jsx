import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk-h0-qwz.css';
import '../../css/a/ay9z9qbkf.css';
import '../../css/p/pxocl7ibk.css';
import '../../css/d/dwefpzbfy.css';
import '../../css/i/is485j6tj.css';
import '../../css/o/oqc3y7p7e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yk-h0-qwz"/><path class="ay9z9qbkf"/><path class="pxocl7ibk"/><path class="dwefpzbfy"/><path class="is485j6tj"/><path class="oqc3y7p7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hot-beverage"} {...others} />);
}

export default Component;
