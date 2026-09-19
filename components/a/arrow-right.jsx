import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebldvkbho.css';
import '../../css/y/y5vv9ubra.css';
import '../../css/b/b922yzmjq.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ebldvkbho"/><path class="y5vv9ubra"/><path class="b922yzmjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:arrow-right"} {...others} />);
}

export default Component;
