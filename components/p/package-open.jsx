import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/usvltujtk.css';
import '../../css/g/g6i-kkbvy.css';
import '../../css/z/z6btbdcwc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="usvltujtk"/><path class="g6i-kkbvy"/><path class="z6btbdcwc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:package-open"} {...others} />);
}

export default Component;
