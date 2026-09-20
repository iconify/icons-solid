import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/slbmp05ij.css';
import '../../css/v/vbga37b5u.css';
import '../../css/j/jzs00pbkg.css';
import '../../css/x/xku78zbcg.css';
import '../../css/f/ffaf7db7l.css';
import '../../css/o/obw1o1b2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="slbmp05ij"/><path class="vbga37b5u"/><path class="jzs00pbkg"/><path class="xku78zbcg"/><path class="ffaf7db7l"/><path class="obw1o1b2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:file-java"} {...others} />);
}

export default Component;
