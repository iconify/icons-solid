import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcnvp-btz.css';
import '../../css/y/ygre9pbqx.css';
import '../../css/t/t75ay3btw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lcnvp-btz"/><path class="ygre9pbqx"/><path class="t75ay3btw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:spring-balance-20"} {...others} />);
}

export default Component;
