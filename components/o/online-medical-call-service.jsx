import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pxxu51v9h.css';
import '../../css/o/oxrehlboa.css';
import '../../css/i/ihfsndiwn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pxxu51v9h"/><path class="oxrehlboa"/><path class="ihfsndiwn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:online-medical-call-service"} {...others} />);
}

export default Component;
