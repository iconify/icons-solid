import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/ufvlzgcdl.css';
import '../../css/k/kmx3l7elf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ufvlzgcdl"/><path class="kmx3l7elf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:artificial-intelligence-brain-chip"} {...others} />);
}

export default Component;
