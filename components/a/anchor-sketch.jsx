import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u-89ex_1l.css';
import '../../css/o/o_89d8juo.css';
import '../../css/m/mqioy1r3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="u-89ex_1l wm-k"/><path class="o_89d8juo wm-k"/><path class="mqioy1r3z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:anchor-sketch"} {...others} />);
}

export default Component;
