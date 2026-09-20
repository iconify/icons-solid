import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lukw5lboi.css';
import '../../css/t/t_hl83buc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lukw5lboi"/><path class="t_hl83buc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:folder-code"} {...others} />);
}

export default Component;
