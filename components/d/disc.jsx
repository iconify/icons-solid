import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nllflp_eh.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/d/dosjvkbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nllflp_eh"/><path class="bwibdw4bb"/><path class="dosjvkbqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:disc"} {...others} />);
}

export default Component;
