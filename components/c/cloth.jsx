import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd-_1dbee.css';
import '../../css/b/b9s2v5y7q.css';
import '../../css/p/pvjzk9b8i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qd-_1dbee"/><path class="b9s2v5y7q"/><path class="pvjzk9b8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:cloth"} {...others} />);
}

export default Component;
