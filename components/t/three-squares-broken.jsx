import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ebgmn1bwx.css';
import '../../css/p/p7aq10b2c.css';
import '../../css/b/bt2vd8brk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ebgmn1bwx"/><path class="p7aq10b2c"/><path class="bt2vd8brk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:three-squares-broken"} {...others} />);
}

export default Component;
