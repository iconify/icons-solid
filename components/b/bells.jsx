import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fp2i67btp.css';
import '../../css/f/f5a2m6bwg.css';
import '../../css/t/tqb0vgbgp.css';
import '../../css/h/h2wowl21p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fp2i67btp"/><path class="f5a2m6bwg"/><path class="tqb0vgbgp"/><path class="h2wowl21p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bells"} {...others} />);
}

export default Component;
