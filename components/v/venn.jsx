import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kffapt02h.css';
import '../../css/v/v99dws5gv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="kffapt02h"/><circle class="v99dws5gv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:venn"} {...others} />);
}

export default Component;
