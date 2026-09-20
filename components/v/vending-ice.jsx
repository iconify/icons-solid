import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_3ltgb8o.css';
import '../../css/o/ojl0pt7uj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s_3ltgb8o"/><path class="ojl0pt7uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-ice"} {...others} />);
}

export default Component;
