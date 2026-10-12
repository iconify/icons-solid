import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puwomltkq.css';
import '../../css/w/weva54bwa.css';
import '../../css/p/p7p0_0bwx.css';
import '../../css/a/a89kcrslp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="puwomltkq"/><path class="weva54bwa"/><rect transform="rotate(-90 7.33 5.59)" class="p7p0_0bwx"/><path class="a89kcrslp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clipboard-content"} {...others} />);
}

export default Component;
