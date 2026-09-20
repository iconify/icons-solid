import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/si_mtzbvj.css';
import '../../css/b/bz9swpb3x.css';
import '../../css/n/n0kyqub_b.css';
import '../../css/g/gogond7uq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="si_mtzbvj"/><path class="bz9swpb3x"/><path class="n0kyqub_b"/><path class="gogond7uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cardholder-broken"} {...others} />);
}

export default Component;
