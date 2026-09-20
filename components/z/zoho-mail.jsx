import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tpie12blh.css';
import '../../css/w/w092a3gwv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tpie12blh"/><path class="w092a3gwv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zoho-mail"} {...others} />);
}

export default Component;
