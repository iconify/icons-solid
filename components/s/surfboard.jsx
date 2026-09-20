import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fs_bz_beq.css';
import '../../css/s/s9c4264fv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fs_bz_beq"/><path class="s9c4264fv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:surfboard"} {...others} />);
}

export default Component;
