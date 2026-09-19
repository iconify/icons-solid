import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/ryy00cbat.css';
import '../../css/j/jz5umcc9b.css';
import '../../css/v/v4a588b4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ryy00cbat"/><path class="jz5umcc9b"/><path class="v4a588b4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:game-controller-02"} {...others} />);
}

export default Component;
