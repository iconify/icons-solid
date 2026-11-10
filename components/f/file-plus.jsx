import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grcrhib5c.css';
import '../../css/g/g0o0c02xd.css';
import '../../css/q/qad5q_aey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="grcrhib5c"/><path class="g0o0c02xd"/><path class="qad5q_aey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-plus"} {...others} />);
}

export default Component;
