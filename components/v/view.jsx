import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wnn-8inzs.css';
import '../../css/r/rf3s4lbuj.css';
import '../../css/p/ppdzzsb6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wnn-8inzs"/><path class="rf3s4lbuj"/><path class="ppdzzsb6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:view"} {...others} />);
}

export default Component;
