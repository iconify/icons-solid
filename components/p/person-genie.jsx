import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odbfh8bkk.css';
import '../../css/x/xkzk0rgrd.css';
import '../../css/m/m6prnpbep.css';
import '../../css/h/h0r-wpbtz.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="odbfh8bkk"/><path clip-rule="evenodd" class="xkzk0rgrd"/><path class="m6prnpbep"/><path class="h0r-wpbtz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:person-genie"} {...others} />);
}

export default Component;
