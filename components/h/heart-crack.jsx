import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cfnyxxbjf.css';
import '../../css/s/s-2n28bts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cfnyxxbjf"/><path class="s-2n28bts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:heart-crack"} {...others} />);
}

export default Component;
