import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ko_cibb2i.css';
import '../../css/b/bkhiprxmo.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ko_cibb2i"/><path class="bkhiprxmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:save"} {...others} />);
}

export default Component;
