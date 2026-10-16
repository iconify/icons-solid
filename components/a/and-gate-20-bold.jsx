import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qntmgtbht.css';
import '../../css/m/mfqrv5y5q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qntmgtbht"/><path class="mfqrv5y5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:and-gate-20-bold"} {...others} />);
}

export default Component;
