import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zqeiqactw.css';
import '../../css/m/mk_kcm8ka.css';
import '../../css/y/yn4ol3bhc.css';
import '../../css/g/gdtxx_biq.css';
import '../../css/u/uzvf84bcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-a zqeiqactw"/><path class="mk_kcm8ka wm-s"/><path class="wm-k yn4ol3bhc"/><path class="gdtxx_biq wm-a"/><path class="uzvf84bcr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:jack-o-lantern-sketch"} {...others} />);
}

export default Component;
