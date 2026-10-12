import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f12djacis.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/t/tv-tkebki.css';
import '../../css/l/l8frkcbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f12djacis"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="tv-tkebki"/><path class="l8frkcbhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-surprise"} {...others} />);
}

export default Component;
