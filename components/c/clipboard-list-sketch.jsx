import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cuclwhyqo.css';
import '../../css/u/uoaa1gawm.css';
import '../../css/k/kntysj6im.css';
import '../../css/j/jwtq0cbry.css';
import '../../css/x/xuf368byp.css';
import '../../css/n/ndf5tbb2x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cuclwhyqo wm-k"/><path class="uoaa1gawm wm-k"/><path class="kntysj6im wm-k"/><path class="jwtq0cbry wm-a"/><path class="wm-a xuf368byp"/><path class="ndf5tbb2x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clipboard-list-sketch"} {...others} />);
}

export default Component;
