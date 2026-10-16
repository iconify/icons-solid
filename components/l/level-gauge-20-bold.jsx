import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saail3bjj.css';
import '../../css/v/v58dvfb0o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="saail3bjj"/><path class="v58dvfb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:level-gauge-20-bold"} {...others} />);
}

export default Component;
