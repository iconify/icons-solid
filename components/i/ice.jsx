import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yq0mgfg9t.css';
import '../../css/f/frhx92bgo.css';
import '../../css/q/q3vjumbms.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yq0mgfg9t"/><path class="frhx92bgo"/><path class="q3vjumbms"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ice"} {...others} />);
}

export default Component;
