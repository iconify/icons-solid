import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz7rg2b_o.css';
import '../../css/t/t88vbfbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cz7rg2b_o"/><path class="t88vbfbdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cog"} {...others} />);
}

export default Component;
