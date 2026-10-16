import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miccwacuq.css';
import '../../css/g/gtqceqbja.css';
import '../../css/f/f8wc0fbln.css';
import '../../css/y/yf8odfm8j.css';
import '../../css/r/ra3z0j7ob.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="miccwacuq"/><path class="gtqceqbja"/><path class="f8wc0fbln"/><path class="yf8odfm8j"/><path class="ra3z0j7ob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:minibus-20"} {...others} />);
}

export default Component;
