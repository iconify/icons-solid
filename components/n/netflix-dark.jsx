import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq2kp497d.css';
import '../../css/k/krjjutbfe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wq2kp497d"/><path class="krjjutbfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:netflix-dark"} {...others} />);
}

export default Component;
