import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o0d9nyb_m.css';
import '../../css/h/hlobg2enq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o0d9nyb_m"/><path class="hlobg2enq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:backpack"} {...others} />);
}

export default Component;
