import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yodhwlqsm.css';
import '../../css/d/deh3gdbfr.css';
import '../../css/t/t39p3nb-s.css';
import '../../css/x/x7ykcqogl.css';
import '../../css/p/p5iisrb7p.css';
import '../../css/b/bq7r6eqqo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yodhwlqsm"/><path class="deh3gdbfr"/><path class="t39p3nb-s"/><path class="x7ykcqogl"/><path class="p5iisrb7p"/><path class="bq7r6eqqo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:honey-pot"} {...others} />);
}

export default Component;
