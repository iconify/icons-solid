import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uoams9w2x.css';
import '../../css/t/tnqh3bc1r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uoams9w2x"/><path class="tnqh3bc1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:banknote-20"} {...others} />);
}

export default Component;
