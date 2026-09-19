import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbrbpackc.css';
import '../../css/q/qppagbs6j.css';
import '../../css/s/sk554xd1s.css';
import '../../css/d/d63qckmho.css';
import '../../css/w/w5sk7xs8e.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="xbrbpackc"/><path class="qppagbs6j"/><path class="sk554xd1s"/><path class="d63qckmho"/><path class="w5sk7xs8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:umbrella-on-ground"} {...others} />);
}

export default Component;
