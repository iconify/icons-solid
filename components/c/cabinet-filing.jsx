import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sxlwlmkmh.css';
import '../../css/g/gurl2ypet.css';
import '../../css/c/c4ljqk_0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sxlwlmkmh"/><rect class="gurl2ypet"/><path class="c4ljqk_0q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:cabinet-filing"} {...others} />);
}

export default Component;
