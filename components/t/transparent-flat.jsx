import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fulicobvs.css';
import '../../css/t/tpoq1772t.css';
import '../../css/h/heivj-bnr.css';
import '../../css/r/re2wkt-rp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="fulicobvs"/><path class="tpoq1772t"/><path clip-rule="evenodd" class="heivj-bnr"/><path clip-rule="evenodd" class="re2wkt-rp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:transparent-flat"} {...others} />);
}

export default Component;
