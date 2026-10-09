import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2q88dbhf.css';
import '../../css/p/pqo_b9orr.css';
import '../../css/u/ut7qkuuts.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n2q88dbhf"/><path class="pqo_b9orr"/><path class="ut7qkuuts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:warehouse-48"} {...others} />);
}

export default Component;
