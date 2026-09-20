import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ywvhbeldm.css';
import '../../css/m/mo0s70put.css';
import '../../css/l/l_c-dr6-u.css';
import '../../css/u/uii-qib3b.css';
import '../../css/c/c8yxnyony.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ywvhbeldm"/><circle class="mo0s70put"/><path class="l_c-dr6-u"/><path class="uii-qib3b"/><path class="c8yxnyony"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:flower-rose-single"} {...others} />);
}

export default Component;
