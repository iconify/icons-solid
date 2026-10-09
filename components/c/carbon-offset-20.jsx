import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnjkukbmw.css';
import '../../css/o/ozisc9lak.css';
import '../../css/w/waeycxb3h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rnjkukbmw"/><path class="ozisc9lak"/><path class="waeycxb3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-offset-20"} {...others} />);
}

export default Component;
