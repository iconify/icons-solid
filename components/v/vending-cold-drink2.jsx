import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_3ltgb8o.css';
import '../../css/d/dk4tjtb5t.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s_3ltgb8o"/><path class="dk4tjtb5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-cold-drink2"} {...others} />);
}

export default Component;
