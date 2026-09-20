import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnix5mb_n.css';
import '../../css/f/fvm61b_7b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pnix5mb_n"/><path class="fvm61b_7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ackify"} {...others} />);
}

export default Component;
