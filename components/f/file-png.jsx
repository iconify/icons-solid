import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6a9rr47i.css';
import '../../css/t/tb27hpb1g.css';
import '../../css/e/e2ds31qsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="p6a9rr47i"/><path class="tb27hpb1g"/><path class="e2ds31qsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-png"} {...others} />);
}

export default Component;
