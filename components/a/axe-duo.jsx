import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q0de-9ssb.css';
import '../../css/k/k1k5x7c4q.css';
import '../../css/o/o7qoddckf.css';
import '../../css/x/xkz03gb0d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="q0de-9ssb"/><path class="k1k5x7c4q"/><path class="o7qoddckf"/><path class="xkz03gb0d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:axe-duo"} {...others} />);
}

export default Component;
