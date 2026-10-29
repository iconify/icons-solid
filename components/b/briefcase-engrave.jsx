import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fgqe3-b2w.css';
import '../../css/r/r315h5b8w.css';
import '../../css/o/ozp63ob-s.css';
import '../../css/y/y3j3vjb4e.css';
import '../../css/z/zrrjdvbzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="fgqe3-b2w wm-k"/><path class="r315h5b8w wm-a"/><path class="ozp63ob-s wm-shadow"/><path class="wm-k y3j3vjb4e"/><path class="wm-a zrrjdvbzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:briefcase-engrave"} {...others} />);
}

export default Component;
