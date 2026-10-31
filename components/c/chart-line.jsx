import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d0wnsrbyc.css';
import '../../css/c/cw36_6mco.css';
import '../../css/a/ampev-b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d0wnsrbyc wm-k"/><path class="cw36_6mco wm-a"/><path class="ampev-b2a wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-line"} {...others} />);
}

export default Component;
