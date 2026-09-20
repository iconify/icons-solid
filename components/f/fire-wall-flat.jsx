import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l-2_3be0a.css';
import '../../css/a/aljv-2bww.css';
import '../../css/p/pueowy_uh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l-2_3be0a"/><path class="aljv-2bww"/><path clip-rule="evenodd" class="pueowy_uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:fire-wall-flat"} {...others} />);
}

export default Component;
