import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhidh3bkp.css';
import '../../css/l/lqrjwzctw.css';
import '../../css/o/o9nusacsq.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGs3R8w1QS" x1="163.5" x2="296.6" y1="185.7" y2="416.3" gradientUnits="userSpaceOnUse"><stop offset="0" class="yhidh3bkp"/><stop offset=".5" class="yhidh3bkp"/><stop offset="1" class="lqrjwzctw"/></linearGradient></defs><path fill="url(#SVGs3R8w1QS)" class="o9nusacsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:code-orange-fill"} {...others} />);
}

export default Component;
