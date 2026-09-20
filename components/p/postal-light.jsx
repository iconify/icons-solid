import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdblbht-m.css';
import '../../css/y/yjqp6ojwn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qdblbht-m"/><path class="yjqp6ojwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:postal-light"} {...others} />);
}

export default Component;
