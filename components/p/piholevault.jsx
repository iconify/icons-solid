import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixcjahbeg.css';
import '../../css/v/v3ts8bbtq.css';
import '../../css/c/cspszkbby.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ixcjahbeg"/><path class="v3ts8bbtq"/><path class="cspszkbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:piholevault"} {...others} />);
}

export default Component;
