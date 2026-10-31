import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew78g6rhn.css';
import '../../css/q/qitmchgwd.css';
import '../../css/w/w3tlvb73i.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="ew78g6rhn"/><path class="qitmchgwd"/><path class="w3tlvb73i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:democratic-republic-congo"} {...others} />);
}

export default Component;
