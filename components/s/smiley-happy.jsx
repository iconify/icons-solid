import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyrin2kcm.css';
import '../../css/g/gzdlvdbrh.css';
import '../../css/o/ow6krzbfa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uyrin2kcm"/><path class="gzdlvdbrh"/><path class="ow6krzbfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-happy"} {...others} />);
}

export default Component;
