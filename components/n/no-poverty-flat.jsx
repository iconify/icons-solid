import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u0ofxlbuc.css';
import '../../css/d/de1kr4q_i.css';
import '../../css/e/ejrded2ld.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="u0ofxlbuc"/><path class="de1kr4q_i"/><path class="ejrded2ld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:no-poverty-flat"} {...others} />);
}

export default Component;
