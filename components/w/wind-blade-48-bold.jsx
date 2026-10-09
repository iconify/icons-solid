import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac35u9zca.css';
import '../../css/n/n828jkbji.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ac35u9zca"/><path class="n828jkbji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-blade-48-bold"} {...others} />);
}

export default Component;
