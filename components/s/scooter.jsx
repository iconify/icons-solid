import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/ht5wlpmij.css';
import '../../css/o/ogd71bbce.css';
import '../../css/y/y02hd5l5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ht5wlpmij"/><circle class="ogd71bbce"/><circle class="y02hd5l5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:scooter"} {...others} />);
}

export default Component;
