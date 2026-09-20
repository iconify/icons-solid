import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn34-vucd.css';
import '../../css/b/b86d2abtw.css';
import '../../css/l/l_xd_ts3f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="yn34-vucd"/><path class="b86d2abtw"/><path class="l_xd_ts3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:diamond-2"} {...others} />);
}

export default Component;
