import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oj64usbpy.css';
import '../../css/k/k5b12z82e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oj64usbpy"/><path class="k5b12z82e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:timer-reset"} {...others} />);
}

export default Component;
