import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uwq_awb_v.css';
import '../../css/i/isfqmkfad.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uwq_awb_v"/><path class="isfqmkfad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:se-1x1"} {...others} />);
}

export default Component;
