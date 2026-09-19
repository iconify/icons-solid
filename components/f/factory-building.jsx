import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/v/vfoyb1bct.css';
import '../../css/r/ry5xqfcza.css';
import '../../css/k/kf3uc_2hy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="vfoyb1bct"/><rect class="ry5xqfcza"/><rect class="kf3uc_2hy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:factory-building"} {...others} />);
}

export default Component;
