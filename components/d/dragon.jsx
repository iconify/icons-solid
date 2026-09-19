import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/punmc35bv.css';
import '../../css/x/xwh7pzbbi.css';
import '../../css/x/xjz3x4bzs.css';
import '../../css/a/au9b4g8cs.css';
import '../../css/n/nrqnj2blu.css';
import '../../css/h/h-iagik0c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="punmc35bv"/><path class="xwh7pzbbi"/><path class="xjz3x4bzs"/><path class="au9b4g8cs"/><path class="nrqnj2blu"/><path class="h-iagik0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dragon"} {...others} />);
}

export default Component;
