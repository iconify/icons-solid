import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yst6o6bek.css';
import '../../css/r/ru78nubsm.css';
import '../../css/p/pnpsnyk9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yst6o6bek"/><path clip-rule="evenodd" class="ru78nubsm"/><path class="pnpsnyk9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chart-mean"} {...others} />);
}

export default Component;
