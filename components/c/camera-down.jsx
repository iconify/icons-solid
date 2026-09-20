import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n90tau3hd.css';
import '../../css/z/zn7_f2bnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n90tau3hd"/><path class="zn7_f2bnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:camera-down"} {...others} />);
}

export default Component;
