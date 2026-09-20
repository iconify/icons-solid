import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pxfupjbgw.css';
import '../../css/u/un3d3yeja.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pxfupjbgw"/><path class="un3d3yeja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mood-boy"} {...others} />);
}

export default Component;
