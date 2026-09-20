import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ioaor2bii.css';
import '../../css/d/dqq3fo4pl.css';
import '../../css/m/mxhqu1x7y.css';
import '../../css/e/egm-6jb-e.css';
import '../../css/r/rg8vhvbio.css';
import '../../css/z/zco6t7b4l.css';
import '../../css/e/et7pe2p8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ioaor2bii"/><path class="dqq3fo4pl"/><path class="mxhqu1x7y"/><path class="egm-6jb-e"/><path class="rg8vhvbio"/><path class="zco6t7b4l"/><path class="et7pe2p8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:calculator-outline"} {...others} />);
}

export default Component;
