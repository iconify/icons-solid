import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rm_x1ibzv.css';
import '../../css/l/lvnn0-p0f.css';
import '../../css/i/i0dy8zbbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rm_x1ibzv"/><path class="lvnn0-p0f"/><path class="i0dy8zbbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:hand-heart"} {...others} />);
}

export default Component;
