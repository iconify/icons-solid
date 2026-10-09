import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqu5shbcg.css';
import '../../css/y/yis3i_jsr.css';
import '../../css/k/kv38rku_j.css';
import '../../css/k/kma9qvbyu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rqu5shbcg"/><path class="yis3i_jsr"/><path class="kv38rku_j"/><path class="kma9qvbyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:api-key-48-bold"} {...others} />);
}

export default Component;
