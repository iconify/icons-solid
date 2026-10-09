import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bygov5bnk.css';
import '../../css/c/cgej8yb_k.css';
import '../../css/b/b6r2r-z2x.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bygov5bnk"/><path class="cgej8yb_k"/><path class="b6r2r-z2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-turbine-bolt-20"} {...others} />);
}

export default Component;
