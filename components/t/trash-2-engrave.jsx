import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pyn9gac2v.css';
import '../../css/l/lz-cf419k.css';
import '../../css/b/b4pwiil8l.css';
import '../../css/a/araeuyb9p.css';
import '../../css/w/wuxib33uk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="pyn9gac2v wm-k"/><path class="lz-cf419k wm-a"/><path class="b4pwiil8l wm-shadow"/><path class="araeuyb9p wm-k"/><path class="wm-a wuxib33uk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:trash-2-engrave"} {...others} />);
}

export default Component;
