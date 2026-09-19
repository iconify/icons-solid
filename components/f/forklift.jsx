import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zg2hoac6p.css';
import '../../css/u/up1c25bec.css';
import '../../css/t/t718pm8uq.css';

const viewBox = {"width":16,"height":16};
const content = `<g transform="translate(0 2)" class="n1lsf0bnc"><circle class="zg2hoac6p"/><circle class="up1c25bec"/><path class="t718pm8uq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:forklift"} {...others} />);
}

export default Component;
