import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b20gz5bfs.css';
import '../../css/b/bv0gny4-m.css';
import '../../css/o/on0pidpto.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="b20gz5bfs"/><path class="bv0gny4-m"/><path class="on0pidpto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-wrench-20"} {...others} />);
}

export default Component;
