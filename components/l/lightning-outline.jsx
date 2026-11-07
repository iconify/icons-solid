import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ii24kzbxm.css';
import '../../css/x/xejlx-96v.css';
import '../../css/z/zly6tablv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ii24kzbxm"/><path class="xejlx-96v"/><path clip-rule="evenodd" class="zly6tablv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lightning-outline"} {...others} />);
}

export default Component;
