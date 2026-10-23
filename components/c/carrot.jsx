import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kmr_5gbeb.css';
import '../../css/b/b_n8y9--j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kmr_5gbeb"/><path class="b_n8y9--j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:carrot"} {...others} />);
}

export default Component;
