import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nu5enkbzg.css';
import '../../css/z/zn10sld1h.css';
import '../../css/r/rpq0ilb4n.css';
import '../../css/v/v67omdh3q.css';
import '../../css/h/hw-5-kgoz.css';
import '../../css/u/utiw4jbqs.css';
import '../../css/n/nhunzz9zc.css';
import '../../css/z/zlsyrsb8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nu5enkbzg"/><path class="zn10sld1h"/><path class="rpq0ilb4n"/><path class="v67omdh3q"/><path class="hw-5-kgoz"/><path class="utiw4jbqs"/><path class="nhunzz9zc"/><path class="zlsyrsb8p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:video-frame-replace-line-duotone"} {...others} />);
}

export default Component;
