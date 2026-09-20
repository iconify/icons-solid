import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2a7lnupb.css';
import '../../css/i/igo6zo3_s.css';
import '../../css/s/s36agfsxj.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="t2a7lnupb"/><path clip-rule="evenodd" class="igo6zo3_s"/><path clip-rule="evenodd" class="s36agfsxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-tables-light"} {...others} />);
}

export default Component;
