import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdoq3cuij.css';
import '../../css/r/rtt1uzcet.css';
import '../../css/u/ud64ddcfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rdoq3cuij"/><path class="rtt1uzcet"/><path class="ud64ddcfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:megaphone-off"} {...others} />);
}

export default Component;
