import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r0_tkgy3d.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/a/aytpqbcgj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r0_tkgy3d"/><circle class="h_tsn8bxt"/><path class="aytpqbcgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:floppy-disk-rear"} {...others} />);
}

export default Component;
