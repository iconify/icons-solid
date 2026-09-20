import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fr5386brj.css';
import '../../css/c/cxlsd5blc.css';
import '../../css/z/zypf8t5ce.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fr5386brj"/><path class="cxlsd5blc"/><rect class="zypf8t5ce"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sandwich"} {...others} />);
}

export default Component;
