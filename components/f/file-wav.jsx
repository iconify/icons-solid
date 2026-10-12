import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggf-x0bwa.css';
import '../../css/s/s3akstboo.css';
import '../../css/x/xd1p0ithd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ggf-x0bwa"/><path class="s3akstboo"/><path class="xd1p0ithd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-wav"} {...others} />);
}

export default Component;
