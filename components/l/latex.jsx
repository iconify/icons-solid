import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5wnjibna.css';
import '../../css/e/emjfvk0xz.css';
import '../../css/e/e9665qbwc.css';
import '../../css/x/x21x2pqay.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q5wnjibna"/><path class="emjfvk0xz"/><path class="e9665qbwc"/><path class="x21x2pqay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:latex"} {...others} />);
}

export default Component;
