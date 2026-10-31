import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/a38ii-b7l.css';
import '../../css/z/zwnn_sb4u.css';
import '../../css/n/n3jvmegul.css';
import '../../css/v/vrpgvia9s.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="a38ii-b7l"/><path class="wm-shine zwnn_sb4u"/><path class="n3jvmegul wm-k"/><path class="vrpgvia9s wm-a"/><path class="a0o9nky4v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:file-chart"} {...others} />);
}

export default Component;
