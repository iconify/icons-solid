import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr1vn-rwh.css';
import '../../css/v/v904cs9gt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tr1vn-rwh"/><path class="v904cs9gt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:raneto-light"} {...others} />);
}

export default Component;
