import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mjp3b5b5u.css';
import '../../css/h/hitb2acsr.css';
import '../../css/c/cq4u8c4rd.css';
import '../../css/q/qwnv0ccim.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="mjp3b5b5u"/><path class="hitb2acsr"/><path class="cq4u8c4rd"/><path class="qwnv0ccim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:airpods"} {...others} />);
}

export default Component;
