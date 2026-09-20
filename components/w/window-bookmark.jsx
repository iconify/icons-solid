import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tige7vbdh.css';
import '../../css/q/qseskczqv.css';
import '../../css/w/w35y4zl1r.css';
import '../../css/p/p8udl8b8x.css';
import '../../css/l/lo0l2nbjj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tige7vbdh"/><path class="qseskczqv"/><path class="w35y4zl1r"/><path class="p8udl8b8x"/><path class="lo0l2nbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:window-bookmark"} {...others} />);
}

export default Component;
