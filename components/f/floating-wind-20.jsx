import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6oa8knwz.css';
import '../../css/x/xxgbczr8p.css';
import '../../css/c/c6b6y2bkd.css';
import '../../css/n/nf_ginl5s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n6oa8knwz"/><path class="xxgbczr8p"/><path class="c6b6y2bkd"/><path class="nf_ginl5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:floating-wind-20"} {...others} />);
}

export default Component;
