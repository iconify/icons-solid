import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd5ook69p.css';
import '../../css/a/a6yl8qvjm.css';
import '../../css/k/k910eabre.css';
import '../../css/d/dtahoz0bs.css';
import '../../css/h/ht963veys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zd5ook69p"/><path class="a6yl8qvjm"/><path class="k910eabre"/><path class="dtahoz0bs"/><path class="ht963veys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:soap-dispenser"} {...others} />);
}

export default Component;
