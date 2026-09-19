import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hiflp5bhb.css';
import '../../css/e/e-p7_jblt.css';
import '../../css/n/n8krgcbjo.css';
import '../../css/c/cwv945b2s.css';
import '../../css/w/wmlnh_yyv.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hiflp5bhb"/><circle class="e-p7_jblt"/><circle class="n8krgcbjo"/><path class="cwv945b2s"/><path class="wmlnh_yyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:compact-camera"} {...others} />);
}

export default Component;
