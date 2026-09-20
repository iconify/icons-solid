import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t1i4u809l.css';
import '../../css/j/j6miii01f.css';
import '../../css/s/sv9ccdysk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t1i4u809l"/><path class="j6miii01f"/><path class="sv9ccdysk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:photo-alt"} {...others} />);
}

export default Component;
