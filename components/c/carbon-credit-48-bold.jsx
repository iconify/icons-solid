import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2neunb3u.css';
import '../../css/q/q9ec6cb9b.css';
import '../../css/o/on2nbp2_b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2neunb3u"/><path class="q9ec6cb9b"/><path class="on2nbp2_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-credit-48-bold"} {...others} />);
}

export default Component;
