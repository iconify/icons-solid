import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtet-k65m.css';
import '../../css/a/an9q9g7yw.css';
import '../../css/f/fxx-u-bxj.css';
import '../../css/s/sqxdqpa1f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jtet-k65m"/><path class="an9q9g7yw"/><path class="fxx-u-bxj"/><path class="sqxdqpa1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-canopy-20-bold"} {...others} />);
}

export default Component;
