import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf27qfbet.css';
import '../../css/s/ssrhhq6tf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gf27qfbet"/><path class="ssrhhq6tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-network-20"} {...others} />);
}

export default Component;
