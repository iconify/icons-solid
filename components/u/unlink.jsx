import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/isai9mbeu.css';
import '../../css/a/azva0wb3h.css';
import '../../css/z/zgn7jc0xl.css';
import '../../css/i/ijkn-8fae.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="isai9mbeu"/><path class="azva0wb3h"/><path class="zgn7jc0xl"/><path class="ijkn-8fae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:unlink"} {...others} />);
}

export default Component;
