import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhbyxpbbq.css';
import '../../css/q/qxnbbh5_c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zhbyxpbbq"/><path class="qxnbbh5_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:erugo-light"} {...others} />);
}

export default Component;
