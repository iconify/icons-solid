import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qv1hjct0r.css';
import '../../css/r/r8nqnlg4f.css';
import '../../css/e/eihuxibxb.css';
import '../../css/n/nz-icuhdc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qv1hjct0r"/><path class="r8nqnlg4f"/><path class="eihuxibxb"/><path class="nz-icuhdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:figma-flatten-selection"} {...others} />);
}

export default Component;
