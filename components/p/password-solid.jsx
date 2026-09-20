import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipfz-qbde.css';
import '../../css/l/l0z5z-bqe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ipfz-qbde"/><path clip-rule="evenodd" class="l0z5z-bqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:password-solid"} {...others} />);
}

export default Component;
