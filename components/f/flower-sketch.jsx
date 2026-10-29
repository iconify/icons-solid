import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xag6ozbqu.css';
import '../../css/r/r8hfrupfa.css';
import '../../css/s/sdb3vkbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xag6ozbqu"/><path class="r8hfrupfa wm-k"/><path class="sdb3vkbhq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:flower-sketch"} {...others} />);
}

export default Component;
