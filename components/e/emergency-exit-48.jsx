import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osomhcctt.css';
import '../../css/k/k7j-vcupp.css';
import '../../css/g/g-sjg9bqg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="osomhcctt"/><path class="k7j-vcupp"/><path class="g-sjg9bqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emergency-exit-48"} {...others} />);
}

export default Component;
