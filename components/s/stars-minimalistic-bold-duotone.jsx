import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc0y0bdho.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/j/jqsfrz9lo.css';
import '../../css/h/hd4nyobgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vc0y0bdho"/><g class="xtpeb-edw"><path class="jqsfrz9lo"/><path class="hd4nyobgw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:stars-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
