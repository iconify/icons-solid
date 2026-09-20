import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yc12vib0p.css';
import '../../css/g/g9cw18bkp.css';
import '../../css/d/dlsp10brj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yc12vib0p"/><path class="g9cw18bkp"/><circle class="dlsp10brj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:beef"} {...others} />);
}

export default Component;
