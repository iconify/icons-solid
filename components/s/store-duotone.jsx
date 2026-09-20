import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jq8i14b1j.css';
import '../../css/j/jdhx-vl_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jq8i14b1j"/><path class="jdhx-vl_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:store-duotone"} {...others} />);
}

export default Component;
