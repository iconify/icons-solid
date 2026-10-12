import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqm6o8bjf.css';
import '../../css/r/rtz_uvbkq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qqm6o8bjf"/><path class="rtz_uvbkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sort-20-bold"} {...others} />);
}

export default Component;
