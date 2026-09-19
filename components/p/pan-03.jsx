import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/plbf5dbsw.css';
import '../../css/z/z7dwaybhf.css';
import '../../css/y/yhipwkb9a.css';
import '../../css/w/wu2k7qbov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="plbf5dbsw"/><path class="z7dwaybhf"/><path class="yhipwkb9a"/><path class="wu2k7qbov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pan-03"} {...others} />);
}

export default Component;
