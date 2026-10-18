import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eqidrqohi.css';
import '../../css/m/mq0070biz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eqidrqohi"/><path class="mq0070biz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-jobs-48-bold"} {...others} />);
}

export default Component;
