import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmf-m7bxg.css';
import '../../css/b/bcx0b9bfi.css';
import '../../css/h/hnhi0q8cq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mmf-m7bxg"/><path class="bcx0b9bfi"/><path class="hnhi0q8cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:school-bus-20"} {...others} />);
}

export default Component;
