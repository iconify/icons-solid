import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aepx9abmh.css';
import '../../css/l/lww04ubux.css';
import '../../css/l/lc3a4hmvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aepx9abmh"/><path class="lww04ubux"/><path class="lc3a4hmvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:allowances-no-photos-sign"} {...others} />);
}

export default Component;
