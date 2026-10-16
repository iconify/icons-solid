import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxs-cj0rl.css';
import '../../css/z/z9yfx3tkk.css';
import '../../css/u/uqtatsbzn.css';
import '../../css/q/qfs7nya9i.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bxs-cj0rl"/><path class="z9yfx3tkk"/><path class="uqtatsbzn"/><path class="qfs7nya9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fuel-oil-tank-20-bold"} {...others} />);
}

export default Component;
