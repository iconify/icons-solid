import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw3xaacjo.css';
import '../../css/m/m8ytuwboy.css';
import '../../css/a/avtv4mbbr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yw3xaacjo"/><path class="m8ytuwboy"/><path class="avtv4mbbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-credit-20"} {...others} />);
}

export default Component;
