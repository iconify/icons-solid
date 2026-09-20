import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yk-2fob0v.css';
import '../../css/a/acmzzzbif.css';
import '../../css/f/f1_qbxbln.css';
import '../../css/m/mantc1b5u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yk-2fob0v"/><path class="acmzzzbif"/><path class="f1_qbxbln"/><path class="mantc1b5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:temperature-snow"} {...others} />);
}

export default Component;
