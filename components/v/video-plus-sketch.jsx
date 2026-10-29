import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y30alon_g.css';
import '../../css/j/jqzjx1bad.css';
import '../../css/d/ddbht_nzy.css';
import '../../css/c/ci1x8lffu.css';
import '../../css/o/oe5tpmbju.css';
import '../../css/q/qt963y8fa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="y30alon_g"/><path class="jqzjx1bad wm-a"/><path class="ddbht_nzy wm-s"/><path class="ci1x8lffu wm-k"/><path class="oe5tpmbju wm-a"/><path class="qt963y8fa wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:video-plus-sketch"} {...others} />);
}

export default Component;
