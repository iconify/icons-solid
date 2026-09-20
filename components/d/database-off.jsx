import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hy2bsbcql.css';
import '../../css/o/oknaecp5o.css';
import '../../css/y/y_5q5zzjh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hy2bsbcql"/><path class="oknaecp5o"/><path class="y_5q5zzjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:database-off"} {...others} />);
}

export default Component;
