import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltns5k4cl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ltns5k4cl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:bank-card-line"} {...others} />);
}

export default Component;
