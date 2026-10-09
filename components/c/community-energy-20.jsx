import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubixxqbpx.css';
import '../../css/b/bkn6lndtv.css';
import '../../css/k/kkrg8z3mz.css';
import '../../css/i/icfykfbvw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ubixxqbpx"/><path class="bkn6lndtv"/><path class="kkrg8z3mz"/><path class="icfykfbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:community-energy-20"} {...others} />);
}

export default Component;
