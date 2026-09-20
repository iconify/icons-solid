import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqo-cjb6i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lqo-cjb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:delete"} {...others} />);
}

export default Component;
