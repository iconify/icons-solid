import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p2qfbdb0a.css';
import '../../css/n/nsc284b_q.css';
import '../../css/a/argi97bmu.css';
import '../../css/r/rai6xtdfc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="p2qfbdb0a"/><path class="nsc284b_q"/><path class="argi97bmu"/><path class="rai6xtdfc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mouse-face"} {...others} />);
}

export default Component;
