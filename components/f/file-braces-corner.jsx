import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mhfayk9ia.css';
import '../../css/o/olnu6wxmv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mhfayk9ia"/><path class="olnu6wxmv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-braces-corner"} {...others} />);
}

export default Component;
