import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/fchudbk6e.css';
import '../../css/r/rzh-h5b-q.css';
import '../../css/j/j0t7w90yd.css';
import '../../css/x/x6uf6pbly.css';
import '../../css/p/p4bf15bjt.css';
import '../../css/m/mmij5sbik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="fchudbk6e"/><path class="rzh-h5b-q"/><path class="j0t7w90yd"/><path class="x6uf6pbly"/><path class="p4bf15bjt"/><path class="mmij5sbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:cake"} {...others} />);
}

export default Component;
