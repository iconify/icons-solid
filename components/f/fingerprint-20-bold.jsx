import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti32esbih.css';
import '../../css/w/wj5v6jccx.css';
import '../../css/p/pkn8zcbur.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ti32esbih"/><path class="wj5v6jccx"/><path class="pkn8zcbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fingerprint-20-bold"} {...others} />);
}

export default Component;
