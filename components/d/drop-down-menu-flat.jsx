import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/raidj0bjv.css';
import '../../css/t/trej22bll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="raidj0bjv"/><path clip-rule="evenodd" class="trej22bll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:drop-down-menu-flat"} {...others} />);
}

export default Component;
