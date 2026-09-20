import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-74qt9ow.css';
import '../../css/z/zzhnkz4tf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m-74qt9ow"/><path class="zzhnkz4tf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:trending-up"} {...others} />);
}

export default Component;
