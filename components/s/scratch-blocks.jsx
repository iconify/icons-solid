import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dfv4pskbn.css';
import '../../css/z/z836k81om.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dfv4pskbn"/><path class="z836k81om"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scratch-blocks"} {...others} />);
}

export default Component;
