import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_3ltgb8o.css';
import '../../css/t/t8j1ap9bj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s_3ltgb8o"/><path class="t8j1ap9bj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-ice-cream2"} {...others} />);
}

export default Component;
