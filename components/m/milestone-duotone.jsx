import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p2_64ab7f.css';
import '../../css/w/w_h6f3byf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p2_64ab7f"/><path clip-rule="evenodd" class="w_h6f3byf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:milestone-duotone"} {...others} />);
}

export default Component;
