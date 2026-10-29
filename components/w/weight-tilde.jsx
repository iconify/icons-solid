import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylz_-ebvl.css';
import '../../css/u/un66pmdei.css';
import '../../css/o/ox1_2ubue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ylz_-ebvl"/><path class="un66pmdei"/><path class="ox1_2ubue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:weight-tilde"} {...others} />);
}

export default Component;
