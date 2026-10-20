import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phfj06dmv.css';
import '../../css/h/h4f60qjlt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="phfj06dmv"/><path class="h4f60qjlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:hospital"} {...others} />);
}

export default Component;
