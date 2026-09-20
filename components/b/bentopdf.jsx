import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bid-turbb.css';
import '../../css/t/t7741obxh.css';
import '../../css/c/cjo2vfb7a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bid-turbb"/><path class="t7741obxh"/><path class="cjo2vfb7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bentopdf"} {...others} />);
}

export default Component;
