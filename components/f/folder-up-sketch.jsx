import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/arvvodb9x.css';
import '../../css/j/jfegy5qom.css';
import '../../css/u/u-utrpgcn.css';
import '../../css/b/bg9_r-b3k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="arvvodb9x"/><path class="jfegy5qom wm-a"/><path class="u-utrpgcn wm-k"/><path class="bg9_r-b3k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-up-sketch"} {...others} />);
}

export default Component;
