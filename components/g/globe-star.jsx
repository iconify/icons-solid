import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3vz1ubyv.css';
import '../../css/u/u5h8llb9a.css';
import '../../css/w/w8m-xxf_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n3vz1ubyv"/><path class="u5h8llb9a"/><path class="w8m-xxf_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-star"} {...others} />);
}

export default Component;
