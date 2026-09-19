import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t1jo3sb8s.css';
import '../../css/f/f4rs0cbsv.css';
import '../../css/x/xppvq2ske.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="t1jo3sb8s"/><circle class="f4rs0cbsv"/><path class="xppvq2ske"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-music-light"} {...others} />);
}

export default Component;
