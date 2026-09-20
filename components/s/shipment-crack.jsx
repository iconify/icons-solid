import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/ol-_1w5bd.css';
import '../../css/w/w-se6kbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ol-_1w5bd"/><path class="w-se6kbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-crack"} {...others} />);
}

export default Component;
