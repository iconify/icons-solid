import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g2740tsqa.css';
import '../../css/w/w7i5ambvj.css';
import '../../css/x/xk_m4rpyh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g2740tsqa"/><path class="w7i5ambvj"/><path class="xk_m4rpyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hand-little-finger"} {...others} />);
}

export default Component;
