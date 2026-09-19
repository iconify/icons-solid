import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nygllnube.css';
import '../../css/b/bq131wbrb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nygllnube"/><path class="bq131wbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframe-top"} {...others} />);
}

export default Component;
