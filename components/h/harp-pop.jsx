import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgyhjzbke.css';
import '../../css/r/rab3jn48u.css';
import '../../css/s/s4tfz2guq.css';
import '../../css/c/c2meqb4_j.css';
import '../../css/g/g5air4cus.css';
import '../../css/i/is0m0lbhu.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="xgyhjzbke"/><path class="rab3jn48u"/><path class="s4tfz2guq"/><path class="c2meqb4_j"/><path class="g5air4cus"/><path class="is0m0lbhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:harp-pop"} {...others} />);
}

export default Component;
