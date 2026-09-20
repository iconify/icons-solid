import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0ix46b3r.css';
import '../../css/p/p1yx4trbb.css';
import '../../css/d/dcy5gh-xs.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="r0ix46b3r"/><circle class="p1yx4trbb"/><path class="dcy5gh-xs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:navidrome"} {...others} />);
}

export default Component;
