import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hwedgwb1d.css';
import '../../css/z/zn0m79bnw.css';
import '../../css/o/o8y35xbbr.css';
import '../../css/t/tq8vc0lgj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="hwedgwb1d"/><path class="zn0m79bnw"/><path class="o8y35xbbr"/><path class="tq8vc0lgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:elephant"} {...others} />);
}

export default Component;
