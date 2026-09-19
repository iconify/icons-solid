import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/n6v-of2ng.css';
import '../../css/g/gulo6pbni.css';
import '../../css/i/il53i0xwp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="n6v-of2ng"/><path class="gulo6pbni"/><path class="il53i0xwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:knives"} {...others} />);
}

export default Component;
