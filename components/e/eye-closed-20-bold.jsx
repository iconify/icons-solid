import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djp6rcbat.css';
import '../../css/n/n292q15ch.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="djp6rcbat"/><path class="n292q15ch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-closed-20-bold"} {...others} />);
}

export default Component;
