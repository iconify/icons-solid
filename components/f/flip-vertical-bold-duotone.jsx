import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/y/y1y9esb0m.css';
import '../../css/c/c9bv-ub0g.css';
import '../../css/r/re_l3eb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="y1y9esb0m"/><path class="c9bv-ub0g"/></g><path clip-rule="evenodd" class="re_l3eb8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flip-vertical-bold-duotone"} {...others} />);
}

export default Component;
