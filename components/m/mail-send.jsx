import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y8d1qvbld.css';
import '../../css/a/alahm_ivu.css';
import '../../css/p/psajsebiz.css';
import '../../css/p/pwt_h5bhh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="y8d1qvbld"/><path class="alahm_ivu"/><path class="psajsebiz"/><path class="pwt_h5bhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:mail-send"} {...others} />);
}

export default Component;
