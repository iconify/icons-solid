import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/z863xlr_b.css';
import '../../css/b/bm2p9rf_l.css';
import '../../css/z/z2_glebig.css';
import '../../css/z/z50c6lbje.css';
import '../../css/p/pkmb6l7kq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k z863xlr_b"/><path class="bm2p9rf_l wm-a"/><path class="wm-shadow z2_glebig"/><path class="wm-k z50c6lbje"/><path class="pkmb6l7kq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:a-large-small-engrave"} {...others} />);
}

export default Component;
