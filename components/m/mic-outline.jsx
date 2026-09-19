import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh6ex02dp.css';
import '../../css/o/opkm_bb8c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mh6ex02dp"/><path class="opkm_bb8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:mic-outline"} {...others} />);
}

export default Component;
