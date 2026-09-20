import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qcuou08cq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qcuou08cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:archive-lock-outline"} {...others} />);
}

export default Component;
