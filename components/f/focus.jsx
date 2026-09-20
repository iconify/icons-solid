import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gp0egaclj.css';
import '../../css/p/p_qogjuvx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="gp0egaclj"/><path class="p_qogjuvx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:focus"} {...others} />);
}

export default Component;
