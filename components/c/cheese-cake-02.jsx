import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jde3g9ndn.css';
import '../../css/j/j4z_4jizz.css';
import '../../css/g/ghwhkkblu.css';
import '../../css/s/snx15u1zl.css';
import '../../css/w/w7gkj6r1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jde3g9ndn"/><path class="j4z_4jizz"/><path class="ghwhkkblu"/><path class="snx15u1zl"/><path class="w7gkj6r1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cheese-cake-02"} {...others} />);
}

export default Component;
