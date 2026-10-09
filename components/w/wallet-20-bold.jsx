import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8ckwu0tw.css';
import '../../css/q/qgpi-ab8l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s8ckwu0tw"/><path class="qgpi-ab8l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wallet-20-bold"} {...others} />);
}

export default Component;
