import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcw6mnbls.css';
import '../../css/m/m8t0x9bfp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bcw6mnbls"/><path class="m8t0x9bfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pram-20"} {...others} />);
}

export default Component;
