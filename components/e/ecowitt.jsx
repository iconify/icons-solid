import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ic8rdibgp.css';
import '../../css/x/xrb5f7bdm.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ic8rdibgp"/><path class="xrb5f7bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ecowitt"} {...others} />);
}

export default Component;
