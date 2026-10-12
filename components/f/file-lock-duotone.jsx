import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b9-ft2ukl.css';
import '../../css/y/y8ppixbeg.css';
import '../../css/o/omi4i4cer.css';
import '../../css/p/p8ae5pb8m.css';
import '../../css/b/bd29phbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b9-ft2ukl"/><path class="y8ppixbeg"/><path class="omi4i4cer"/><path class="p8ae5pb8m"/><path class="bd29phbwt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:file-lock-duotone"} {...others} />);
}

export default Component;
