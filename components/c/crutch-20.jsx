import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2v6vtbhe.css';
import '../../css/j/jvjk3qbkk.css';
import '../../css/h/h96qerq4e.css';
import '../../css/s/sinjhb0df.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j2v6vtbhe"/><path class="jvjk3qbkk"/><path class="h96qerq4e"/><path class="sinjhb0df"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crutch-20"} {...others} />);
}

export default Component;
