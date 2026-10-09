import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kawbyvyzr.css';
import '../../css/f/fr48pn7bt.css';
import '../../css/s/seuqwvv-o.css';
import '../../css/j/jfn5_8beu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kawbyvyzr"/><path class="fr48pn7bt"/><path class="seuqwvv-o"/><path class="jfn5_8beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:teapot-20-bold"} {...others} />);
}

export default Component;
