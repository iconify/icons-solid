import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-dt4mq6g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e-dt4mq6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:virus-covid"} {...others} />);
}

export default Component;
