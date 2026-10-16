import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdfpdkohr.css';
import '../../css/w/wewzkacif.css';
import '../../css/m/ma5wuhzfp.css';
import '../../css/n/nj-5vbbux.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tdfpdkohr"/><path class="wewzkacif"/><path class="ma5wuhzfp"/><path class="nj-5vbbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scada-20"} {...others} />);
}

export default Component;
