import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f3ro08kee.css';
import '../../css/n/n4g9u7rzq.css';
import '../../css/g/g0y139bsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f3ro08kee wm-a"/><path class="n4g9u7rzq wm-k"/><path class="g0y139bsq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:binary-sketch"} {...others} />);
}

export default Component;
