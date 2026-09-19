import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/ga2-w1vzn.css';
import '../../css/z/z8owmn-2i.css';
import '../../css/r/rga5hfpvp.css';
import '../../css/g/g69fedczw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ga2-w1vzn"/><path class="z8owmn-2i"/><path class="rga5hfpvp"/><path class="g69fedczw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:stars"} {...others} />);
}

export default Component;
