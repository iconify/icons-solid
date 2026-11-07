import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sklhavqwo.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/x/xwm12xb4n.css';
import '../../css/d/ddac4o51k.css';
import '../../css/y/yz1lcmbqq.css';
import '../../css/g/gmpr8wbig.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sklhavqwo"/><g class="xtpeb-edw"><path class="xwm12xb4n"/><path class="ddac4o51k"/><path class="yz1lcmbqq"/><path class="gmpr8wbig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pin-list-bold-duotone"} {...others} />);
}

export default Component;
