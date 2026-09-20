import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wsw2k6ibb.css';
import '../../css/x/x8--0_bxd.css';
import '../../css/b/bsvy_tbtm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wsw2k6ibb"/><path class="x8--0_bxd"/><path class="bsvy_tbtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fit-to-height-square"} {...others} />);
}

export default Component;
