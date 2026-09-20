import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p7k1742pa.css';
import '../../css/o/oocj7bcwu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p7k1742pa"/><path class="oocj7bcwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:high-heel"} {...others} />);
}

export default Component;
