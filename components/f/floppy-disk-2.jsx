import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r0_tkgy3d.css';
import '../../css/u/uelw5zcga.css';
import '../../css/o/obsscdhly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r0_tkgy3d"/><path class="uelw5zcga"/><circle class="obsscdhly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:floppy-disk-2"} {...others} />);
}

export default Component;
