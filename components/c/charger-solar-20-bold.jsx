import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eageplt4r.css';
import '../../css/s/sjlcjjhzm.css';
import '../../css/s/s044fpzgh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eageplt4r"/><path class="sjlcjjhzm"/><path class="s044fpzgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charger-solar-20-bold"} {...others} />);
}

export default Component;
