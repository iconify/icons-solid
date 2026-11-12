import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kyop2kbkj.css';
import '../../css/s/sna9uxb8p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kyop2kbkj"/><path class="sna9uxb8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamystats-dark"} {...others} />);
}

export default Component;
