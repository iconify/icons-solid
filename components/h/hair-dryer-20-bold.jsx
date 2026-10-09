import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc5w0p7ef.css';
import '../../css/j/jnqm95cmv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hc5w0p7ef"/><path class="jnqm95cmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hair-dryer-20-bold"} {...others} />);
}

export default Component;
