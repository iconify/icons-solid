import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h3ocu4b7o.css';
import '../../css/k/ky72zibxh.css';
import '../../css/f/fp29wpb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h3ocu4b7o"/><path class="ky72zibxh"/><circle class="fp29wpb_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mic-2"} {...others} />);
}

export default Component;
