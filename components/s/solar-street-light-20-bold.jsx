import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5xk1zbsn.css';
import '../../css/g/g60bl7rlr.css';
import '../../css/m/mtjikgb4r.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="l5xk1zbsn"/><path class="g60bl7rlr"/><path class="mtjikgb4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-street-light-20-bold"} {...others} />);
}

export default Component;
