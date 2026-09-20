import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/c/cor7s8bfe.css';
import '../../css/g/gqduxdlfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="cor7s8bfe"/><path class="gqduxdlfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-orientation"} {...others} />);
}

export default Component;
