import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ly74rvd1w.css';
import '../../css/o/ois9ejb5c.css';
import '../../css/v/vwdfj7brr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ly74rvd1w"/><path class="ois9ejb5c"/><path class="vwdfj7brr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrows-join-2"} {...others} />);
}

export default Component;
