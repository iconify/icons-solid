import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ur9d2ksio.css';
import '../../css/k/k8tpr2djo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ur9d2ksio"/><path class="k8tpr2djo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:disc-off"} {...others} />);
}

export default Component;
