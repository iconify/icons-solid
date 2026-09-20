import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vodsibtvz.css';
import '../../css/t/tphh8pu_x.css';
import '../../css/s/sr-hrga2q.css';
import '../../css/z/zv9_s716v.css';
import '../../css/g/gms674dss.css';
import '../../css/v/v8ks1hp4n.css';
import '../../css/s/s0ol1rb5q.css';
import '../../css/v/vrrmdtqbq.css';
import '../../css/u/utji1zgeg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vodsibtvz"/><path class="tphh8pu_x"/><path class="sr-hrga2q"/><path class="zv9_s716v"/><path class="gms674dss"/><path class="v8ks1hp4n"/><path class="s0ol1rb5q"/><path class="vrrmdtqbq"/><path class="utji1zgeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:bomb"} {...others} />);
}

export default Component;
