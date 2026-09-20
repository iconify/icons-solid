import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7agjebmg.css';
import '../../css/q/qr18a0v8s.css';
import '../../css/d/d7fm7dbeo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q7agjebmg"/><path class="qr18a0v8s"/><path class="d7fm7dbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-mail-light"} {...others} />);
}

export default Component;
