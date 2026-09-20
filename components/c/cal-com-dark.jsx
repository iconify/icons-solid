import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pri68xb4e.css';
import '../../css/i/i2a0yabqe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pri68xb4e"/><path class="i2a0yabqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cal-com-dark"} {...others} />);
}

export default Component;
