import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2ku2kb3t.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f3326pq5l.css';
import '../../css/l/lnuqcu1vn.css';
import '../../css/o/o6rrpwbqi.css';
import '../../css/q/qhiifsb6o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary y2ku2kb3t"/><g class="dt0cm9dhy primary"><path class="f3326pq5l"/><path class="lnuqcu1vn"/><path class="o6rrpwbqi"/><path class="qhiifsb6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layout-bento-duo"} {...others} />);
}

export default Component;
