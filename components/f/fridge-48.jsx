import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/batmvgb8l.css';
import '../../css/m/m8rkqbbmq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="batmvgb8l"/><path class="m8rkqbbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fridge-48"} {...others} />);
}

export default Component;
