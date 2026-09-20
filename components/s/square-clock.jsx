import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6cquxbzw.css';
import '../../css/e/e235zrwks.css';
import '../../css/q/qttw1t02n.css';
import '../../css/s/sj71gtfbi.css';
import '../../css/h/hcp1fm8yx.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w6cquxbzw"/><path class="e235zrwks"/><path class="qttw1t02n"/><path class="sj71gtfbi"/><path class="hcp1fm8yx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:square-clock"} {...others} />);
}

export default Component;
