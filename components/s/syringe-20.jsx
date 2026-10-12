import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc5dhreuj.css';
import '../../css/o/oi73mpbyr.css';
import '../../css/q/qjjqbcoej.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vc5dhreuj"/><path class="oi73mpbyr"/><path class="qjjqbcoej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:syringe-20"} {...others} />);
}

export default Component;
