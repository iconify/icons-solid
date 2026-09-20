import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uru29ue1u.css';
import '../../css/o/oml3ezfns.css';
import '../../css/e/e8-sr8bzk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uru29ue1u"/><path clip-rule="evenodd" class="oml3ezfns"/><path class="e8-sr8bzk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:summit-flat"} {...others} />);
}

export default Component;
