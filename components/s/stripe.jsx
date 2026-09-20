import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhz5ljcbr.css';
import '../../css/w/wees9lb4o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hhz5ljcbr"/><path class="wees9lb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stripe"} {...others} />);
}

export default Component;
