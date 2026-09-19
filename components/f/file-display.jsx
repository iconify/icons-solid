import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-i1fsn1z.css';
import '../../css/i/i4aplac_p.css';
import '../../css/t/tt_wef58l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="z-i1fsn1z"/><path class="i4aplac_p"/><path class="tt_wef58l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:file-display"} {...others} />);
}

export default Component;
