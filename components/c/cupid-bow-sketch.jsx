import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sswb-xb6m.css';
import '../../css/x/xtwfm-rnu.css';
import '../../css/o/oj9xnhw5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sswb-xb6m wm-a"/><path class="wm-k xtwfm-rnu"/><path class="oj9xnhw5p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cupid-bow-sketch"} {...others} />);
}

export default Component;
