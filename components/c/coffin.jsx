import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kr8gfibak.css';
import '../../css/w/w0rmz2ffs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kr8gfibak"/><path class="w0rmz2ffs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:coffin"} {...others} />);
}

export default Component;
