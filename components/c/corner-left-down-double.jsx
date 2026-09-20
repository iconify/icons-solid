import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pil0h8bir.css';
import '../../css/d/dmq2wlr_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pil0h8bir"/><path class="dmq2wlr_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:corner-left-down-double"} {...others} />);
}

export default Component;
