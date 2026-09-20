import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gac0kygtr.css';
import '../../css/g/gp0egaclj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gac0kygtr"/><circle class="gp0egaclj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:settings"} {...others} />);
}

export default Component;
