import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s70alw0hw.css';
import '../../css/x/xfpff0_9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="s70alw0hw"/><path class="xfpff0_9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:beaker"} {...others} />);
}

export default Component;
