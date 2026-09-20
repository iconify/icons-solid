import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w03w44bva.css';
import '../../css/h/hq0wtlbpd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w03w44bva"/><path class="hq0wtlbpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:bicycle-wrench"} {...others} />);
}

export default Component;
