import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a_v4sl8xe.css';
import '../../css/c/c4kuzacnf.css';
import '../../css/g/gvam3ngsc.css';
import '../../css/m/m87x8mmiu.css';
import '../../css/b/bari53b2u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="a_v4sl8xe"/><path class="c4kuzacnf"/><path class="gvam3ngsc"/><path class="m87x8mmiu"/><path class="bari53b2u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-off-broken"} {...others} />);
}

export default Component;
