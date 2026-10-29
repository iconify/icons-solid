import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uf7g_mb1x.css';
import '../../css/h/h9jdo_b9c.css';
import '../../css/v/vwm7awbrl.css';
import '../../css/l/lw78ty-qw.css';
import '../../css/f/fxgtmqvdi.css';
import '../../css/v/vom1tcpfs.css';
import '../../css/d/d8j11mbqs.css';
import '../../css/w/w5tkkbcwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uf7g_mb1x wm-shadow"/><path class="h9jdo_b9c wm-shadow"/><path class="vwm7awbrl"/><path class="lw78ty-qw"/><path class="fxgtmqvdi"/><path class="vom1tcpfs wm-shine"/><path class="d8j11mbqs wm-shine"/><path class="w5tkkbcwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:wind"} {...others} />);
}

export default Component;
