import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ib32nnbtb.css';
import '../../css/f/fp01zm4es.css';
import '../../css/c/ch1feccze.css';
import '../../css/l/l0hmyvbtb.css';
import '../../css/v/vpvffyb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ib32nnbtb"/><path clip-rule="evenodd" class="fp01zm4es"/><path clip-rule="evenodd" class="ch1feccze"/><path clip-rule="evenodd" class="l0hmyvbtb"/><path class="vpvffyb2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:app-window-source-code"} {...others} />);
}

export default Component;
