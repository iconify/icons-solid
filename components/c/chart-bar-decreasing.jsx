import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/rxpbo5nku.css';
import '../../css/c/c0bw40ovn.css';
import '../../css/s/skn8acc-z.css';
import '../../css/z/zif4qpbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="rxpbo5nku"/><path class="c0bw40ovn wm-k"/><path class="skn8acc-z wm-a"/><path class="wm-deco zif4qpbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-bar-decreasing"} {...others} />);
}

export default Component;
