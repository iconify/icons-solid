import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gd6xzyj5j.css';
import '../../css/c/cl0dc-bek.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gd6xzyj5j"/><path class="cl0dc-bek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:glass-gin"} {...others} />);
}

export default Component;
