import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgkx0fb3j.css';
import '../../css/i/iesayibfy.css';
import '../../css/z/z_26mrcru.css';
import '../../css/e/em3y75frz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lgkx0fb3j"/><path class="iesayibfy"/><circle class="z_26mrcru"/><circle class="em3y75frz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:motorbike"} {...others} />);
}

export default Component;
