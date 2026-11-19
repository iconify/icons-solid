import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awzhktkdh.css';
import '../../css/d/d06y1pblx.css';
import '../../css/o/oqlyqwbcu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="awzhktkdh"/><path class="d06y1pblx"/><path class="oqlyqwbcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-edit"} {...others} />);
}

export default Component;
