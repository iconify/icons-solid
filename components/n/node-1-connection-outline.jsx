import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/nodca_-dr.css';
import '../../css/m/mwe-9d8rn.css';
import '../../css/s/sm9mn1yft.css';
import '../../css/j/jt095ubsn.css';
import '../../css/t/tvibfoxqs.css';
import '../../css/h/hvo_vgb3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="nodca_-dr"/><circle class="mwe-9d8rn"/><circle class="sm9mn1yft"/><circle class="jt095ubsn"/><circle class="tvibfoxqs"/><circle class="hvo_vgb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:node-1-connection-outline"} {...others} />);
}

export default Component;
