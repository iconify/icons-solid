import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4s51m2cx.css';
import '../../css/u/u2p3f39gf.css';
import '../../css/j/j7raxo7it.css';
import '../../css/y/y295kubtu.css';
import '../../css/i/irdcs-buf.css';
import '../../css/r/rpflsgbds.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e4s51m2cx"/><path class="u2p3f39gf"/><path class="j7raxo7it"/><path class="y295kubtu"/><path class="irdcs-buf"/><path class="rpflsgbds"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:attribution"} {...others} />);
}

export default Component;
