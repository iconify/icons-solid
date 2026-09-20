import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hx3xnx1zc.css';
import '../../css/h/h2db70b2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hx3xnx1zc"/><path class="h2db70b2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rating-21-plus"} {...others} />);
}

export default Component;
