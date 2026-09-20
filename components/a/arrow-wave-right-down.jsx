import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uaz-e1cnt.css';
import '../../css/y/yy0nyndig.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="uaz-e1cnt"/><path class="yy0nyndig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-wave-right-down"} {...others} />);
}

export default Component;
