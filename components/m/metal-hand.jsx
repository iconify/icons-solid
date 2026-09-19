import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn2ngg-tf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kn2ngg-tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:metal-hand"} {...others} />);
}

export default Component;
