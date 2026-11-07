import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xnvg8so.css';
import '../../css/i/iw7kyb51l.css';
import '../../css/m/m37d-abet.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nnbvolc4c.css';
import '../../css/g/g74e2oluk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3xnvg8so"/><path class="iw7kyb51l"/><path clip-rule="evenodd" class="m37d-abet"/><g class="xtpeb-edw"><path class="nnbvolc4c"/><path class="g74e2oluk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-left-bold-duotone"} {...others} />);
}

export default Component;
