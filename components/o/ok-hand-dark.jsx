import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dy10jsbis.css';
import '../../css/x/xka64wa2k.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dy10jsbis"/><path class="xka64wa2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ok-hand-dark"} {...others} />);
}

export default Component;
