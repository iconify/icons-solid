import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f6p4mzv6l.css';
import '../../css/r/r9lxsuzcd.css';
import '../../css/r/r4cnm-b1a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 10.96 21.14)" class="f6p4mzv6l"/><rect transform="matrix(0 -1 -1 0 10.96 21.14)" class="r9lxsuzcd"/><path class="r4cnm-b1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:downscale-dashed"} {...others} />);
}

export default Component;
