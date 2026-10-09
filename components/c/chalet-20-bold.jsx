import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2s5geiwy.css';
import '../../css/s/s3-5j4bzw.css';
import '../../css/c/clg0t333v.css';
import '../../css/y/yls8p4b8e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i2s5geiwy"/><path class="s3-5j4bzw"/><path class="clg0t333v"/><path class="yls8p4b8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chalet-20-bold"} {...others} />);
}

export default Component;
