import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kq2vh6sfu.css';
import '../../css/o/omi4i4cer.css';
import '../../css/u/uceo7lb1c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kq2vh6sfu"/><path class="omi4i4cer"/><path class="uceo7lb1c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-cog-duotone"} {...others} />);
}

export default Component;
