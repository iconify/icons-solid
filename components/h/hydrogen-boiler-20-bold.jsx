import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvjobubeq.css';
import '../../css/x/xcsol3bre.css';
import '../../css/s/swiwxvzfz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cvjobubeq"/><path class="xcsol3bre"/><path class="swiwxvzfz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hydrogen-boiler-20-bold"} {...others} />);
}

export default Component;
