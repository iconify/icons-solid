import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/za0t5mbix.css';
import '../../css/k/kve0vpbry.css';
import '../../css/g/gely41auh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="za0t5mbix"/><path class="kve0vpbry"/><path class="gely41auh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:op-amp-20-bold"} {...others} />);
}

export default Component;
