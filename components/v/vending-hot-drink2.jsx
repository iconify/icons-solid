import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_3ltgb8o.css';
import '../../css/o/o9p1ubbpm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s_3ltgb8o"/><path class="o9p1ubbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:vending-hot-drink2"} {...others} />);
}

export default Component;
