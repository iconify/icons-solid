import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/w/w90nt2dmo.css';
import '../../css/n/nlom9l3_e.css';
import '../../css/p/py9i3uwid.css';
import '../../css/l/low_-zbeg.css';
import '../../css/y/y9szusbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="w90nt2dmo"/><path class="nlom9l3_e"/></g><path class="py9i3uwid"/><path class="low_-zbeg"/><path class="y9szusbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-4-bold-duotone"} {...others} />);
}

export default Component;
