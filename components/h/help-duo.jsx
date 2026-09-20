import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thjuvbz3w.css';
import '../../css/a/axwf_dbak.css';
import '../../css/o/ojq-e6bio.css';
import '../../css/d/d10q3wbuu.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="thjuvbz3w"><path class="axwf_dbak"/><path clip-rule="evenodd" class="ojq-e6bio"/><path class="d10q3wbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:help-duo"} {...others} />);
}

export default Component;
