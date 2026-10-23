import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g37290paz.css';
import '../../css/k/kmxwpvbav.css';
import '../../css/y/yfvansb7f.css';
import '../../css/v/v149j3b4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g37290paz"/><path class="kmxwpvbav"/><path class="yfvansb7f"/><path class="v149j3b4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:hop"} {...others} />);
}

export default Component;
