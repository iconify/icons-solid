import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oqdxdpjwb.css';
import '../../css/h/hrjfpsb2u.css';
import '../../css/p/pdzzspcnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oqdxdpjwb"/><circle class="hrjfpsb2u"/><circle class="pdzzspcnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:percent"} {...others} />);
}

export default Component;
