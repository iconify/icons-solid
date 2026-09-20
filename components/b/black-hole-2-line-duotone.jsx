import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/w/wt3ybdb3f.css';
import '../../css/b/bluprsbtv.css';
import '../../css/z/z1gx3x2aw.css';
import '../../css/t/tl598c2go.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="h_tsn8bxt"/><path class="wt3ybdb3f"/><path class="bluprsbtv"/><path class="z1gx3x2aw"/><path class="tl598c2go"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:black-hole-2-line-duotone"} {...others} />);
}

export default Component;
