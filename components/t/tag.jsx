import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prfju3rsg.css';
import '../../css/t/tkzexgbcr.css';
import '../../css/v/vzfzj1r9k.css';
import '../../css/n/nw78ppbxz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="prfju3rsg"/><path class="tkzexgbcr"/><path class="vzfzj1r9k"/><path class="nw78ppbxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tag"} {...others} />);
}

export default Component;
