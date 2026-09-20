import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxh105bzq.css';
import '../../css/l/lr2vlobkm.css';
import '../../css/y/y6nfipdrl.css';
import '../../css/b/bd0nzvbjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxh105bzq"/><path class="lr2vlobkm"/><path class="y6nfipdrl"/><path class="bd0nzvbjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rpg"} {...others} />);
}

export default Component;
