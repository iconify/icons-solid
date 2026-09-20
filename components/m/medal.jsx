import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/de2zti8vg.css';
import '../../css/x/xu1251juh.css';
import '../../css/h/hieh39bht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="de2zti8vg"/><circle class="xu1251juh"/><path class="hieh39bht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:medal"} {...others} />);
}

export default Component;
