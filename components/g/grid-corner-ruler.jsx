import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m757ceb0k.css';
import '../../css/h/hqun_2bqs.css';
import '../../css/k/k-oxz-ble.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m757ceb0k"/><path class="hqun_2bqs"/><path class="k-oxz-ble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:grid-corner-ruler"} {...others} />);
}

export default Component;
