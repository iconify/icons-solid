import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li_aurb-v.css';
import '../../css/q/qv-j8ebyv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="li_aurb-v"/><path class="qv-j8ebyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-card"} {...others} />);
}

export default Component;
