import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mjouo0b7m.css';
import '../../css/a/axbcl0bar.css';
import '../../css/e/e1b0znbyt.css';
import '../../css/w/w4t3vvb2y.css';
import '../../css/g/g1zhksbno.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mjouo0b7m"/><path class="axbcl0bar"/><path class="e1b0znbyt"/><path class="w4t3vvb2y"/><path class="g1zhksbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:aerial-tramway"} {...others} />);
}

export default Component;
