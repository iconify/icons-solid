import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pghkivbqq.css';
import '../../css/n/n_12w22lk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pghkivbqq"/><path class="n_12w22lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:excavator-20"} {...others} />);
}

export default Component;
