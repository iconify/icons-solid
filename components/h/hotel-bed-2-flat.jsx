import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_rpmledk.css';
import '../../css/r/r8mbxebmy.css';
import '../../css/o/ozojhyb-d.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i_rpmledk"/><path class="r8mbxebmy"/><path clip-rule="evenodd" class="ozojhyb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hotel-bed-2-flat"} {...others} />);
}

export default Component;
