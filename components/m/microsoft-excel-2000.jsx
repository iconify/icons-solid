import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sibkcjb8c.css';
import '../../css/t/ts2m0_f8z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sibkcjb8c"/><path class="ts2m0_f8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-excel-2000"} {...others} />);
}

export default Component;
