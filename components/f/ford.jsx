import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uin1j8l2y.css';
import '../../css/l/lgs3ws6-e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uin1j8l2y"/><path class="lgs3ws6-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ford"} {...others} />);
}

export default Component;
