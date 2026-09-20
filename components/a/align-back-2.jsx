import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/duo2tzbwe.css';
import '../../css/f/f2x1xkbtq.css';
import '../../css/h/hp9sw6onm.css';
import '../../css/w/w3wj5iy0u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="duo2tzbwe"/><path class="f2x1xkbtq"/><path class="hp9sw6onm"/><path class="w3wj5iy0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:align-back-2"} {...others} />);
}

export default Component;
