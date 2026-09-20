import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tbh4ceb7p.css';
import '../../css/a/adoiajtle.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tbh4ceb7p"/><path class="adoiajtle"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:hexagons-3"} {...others} />);
}

export default Component;
