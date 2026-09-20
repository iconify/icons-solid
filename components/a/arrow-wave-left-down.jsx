import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p327-5bnq.css';
import '../../css/d/d1ba28bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p327-5bnq"/><path class="d1ba28bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-wave-left-down"} {...others} />);
}

export default Component;
