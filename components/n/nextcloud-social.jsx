import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp1v2sdoj.css';
import '../../css/y/ykf16vbbv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qp1v2sdoj"/><path class="ykf16vbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-social"} {...others} />);
}

export default Component;
