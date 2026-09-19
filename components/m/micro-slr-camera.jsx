import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y39sggbha.css';
import '../../css/e/e2gn1lacr.css';
import '../../css/v/vqyenpb5c.css';
import '../../css/o/owvfs9bpr.css';
import '../../css/d/deix3sm7t.css';
import '../../css/d/d1f0r-t1t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y39sggbha"/><path class="e2gn1lacr"/><path class="vqyenpb5c"/><rect class="owvfs9bpr"/><path class="deix3sm7t"/><path class="d1f0r-t1t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:micro-slr-camera"} {...others} />);
}

export default Component;
