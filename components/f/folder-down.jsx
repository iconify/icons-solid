import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdgw9rb_q.css';
import '../../css/o/od3yshbep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mdgw9rb_q"/><path class="od3yshbep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-down"} {...others} />);
}

export default Component;
