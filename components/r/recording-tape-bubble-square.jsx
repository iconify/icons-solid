import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imvy0pbfh.css';
import '../../css/v/vtooltb9j.css';
import '../../css/j/jjsrfidrd.css';
import '../../css/s/syq_tm52u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="imvy0pbfh"/><path class="vtooltb9j"/><path class="jjsrfidrd"/><path class="syq_tm52u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:recording-tape-bubble-square"} {...others} />);
}

export default Component;
