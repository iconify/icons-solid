import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ugmyip8ns.css';
import '../../css/t/tvarxpbhy.css';
import '../../css/h/h561d5hhu.css';
import '../../css/a/ao21d5blb.css';
import '../../css/y/y8u1gcciv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ugmyip8ns wm-k"/><path class="tvarxpbhy wm-a"/><path class="h561d5hhu wm-shadow"/><path class="ao21d5blb wm-k"/><path class="wm-a y8u1gcciv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-left-close-engrave"} {...others} />);
}

export default Component;
