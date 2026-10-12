import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-dwepbcd.css';
import '../../css/r/rrk1nfbye.css';
import '../../css/v/v2hkzdbqr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b-dwepbcd"/><path class="rrk1nfbye"/><path clip-rule="evenodd" class="v2hkzdbqr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cog-duotone"} {...others} />);
}

export default Component;
