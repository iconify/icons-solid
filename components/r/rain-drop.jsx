import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b760q_svr.css';
import '../../css/k/k20av7rgb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b760q_svr"/><path class="k20av7rgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:rain-drop"} {...others} />);
}

export default Component;
