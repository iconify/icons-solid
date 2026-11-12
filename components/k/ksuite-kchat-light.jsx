import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq9emnlot.css';
import '../../css/k/k70m9f-yz.css';
import '../../css/m/m4ht6ksod.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mq9emnlot"/><path class="k70m9f-yz"/><path class="m4ht6ksod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kchat-light"} {...others} />);
}

export default Component;
