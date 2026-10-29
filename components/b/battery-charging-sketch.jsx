import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cjlnqmbsm.css';
import '../../css/e/ertd60wwo.css';
import '../../css/b/b7i_kkbbz.css';
import '../../css/l/l22tp1dfe.css';
import '../../css/z/zuy5aycbn.css';
import '../../css/y/ys8gh6bye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cjlnqmbsm"/><path class="ertd60wwo wm-k"/><path class="b7i_kkbbz wm-k"/><path class="l22tp1dfe wm-a"/><path class="wm-s zuy5aycbn"/><path class="wm-s ys8gh6bye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:battery-charging-sketch"} {...others} />);
}

export default Component;
