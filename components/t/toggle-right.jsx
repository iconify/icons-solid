import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lh069obpf.css';
import '../../css/u/uy3gc8bci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="lh069obpf"/><rect class="uy3gc8bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:toggle-right"} {...others} />);
}

export default Component;
