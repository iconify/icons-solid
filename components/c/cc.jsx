import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekcncrbve.css';
import '../../css/g/gsr7vebbv.css';
import '../../css/w/wz2vvsaic.css';
import '../../css/g/gcmpo3b6i.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ekcncrbve"/><path clip-rule="evenodd" class="gsr7vebbv"/><path class="wz2vvsaic"/><path clip-rule="evenodd" class="gcmpo3b6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:cc"} {...others} />);
}

export default Component;
