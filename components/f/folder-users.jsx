import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6ho2ci2a.css';
import '../../css/v/vfr9osbmg.css';
import '../../css/v/vpqax4bdh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h6ho2ci2a"/><circle class="vfr9osbmg"/><path class="vpqax4bdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-users"} {...others} />);
}

export default Component;
