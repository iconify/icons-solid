import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr36qhbyi.css';
import '../../css/i/iqaipz0-o.css';
import '../../css/b/bfyhr_b7o.css';
import '../../css/q/qkdmrwb3w.css';
import '../../css/b/bxtpaibbv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="tr36qhbyi"><path class="iqaipz0-o"/><path class="bfyhr_b7o"/><path class="qkdmrwb3w"/><path class="bxtpaibbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:treadmill"} {...others} />);
}

export default Component;
