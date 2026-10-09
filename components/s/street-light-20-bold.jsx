import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkophlb7r.css';
import '../../css/x/xiggllbmz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xkophlb7r"/><path class="xiggllbmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:street-light-20-bold"} {...others} />);
}

export default Component;
