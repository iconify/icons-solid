import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlsrljbwz.css';
import '../../css/k/ko3mi2bbn.css';
import '../../css/b/bc05qdnjo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rlsrljbwz"/><path class="ko3mi2bbn"/><path class="bc05qdnjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shield-x-48"} {...others} />);
}

export default Component;
