import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gllekcpqr.css';
import '../../css/m/m-1ekvbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gllekcpqr"/><path class="m-1ekvbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:life-buoy"} {...others} />);
}

export default Component;
