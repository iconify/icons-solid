import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo49c-7rn.css';
import '../../css/e/ev1e0nbdz.css';
import '../../css/y/yiwzwpb5a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wo49c-7rn"/><path class="ev1e0nbdz"/><path class="yiwzwpb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:voice"} {...others} />);
}

export default Component;
