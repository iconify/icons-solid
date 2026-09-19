import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9irqhbom.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/o/oqwog-bbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n9irqhbom"/><path class="bwibdw4bb"/><path class="oqwog-bbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:sleepy"} {...others} />);
}

export default Component;
