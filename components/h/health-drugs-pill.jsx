import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tet16qbak.css';
import '../../css/w/w_q_buz-q.css';
import '../../css/z/zar5c9-1e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tet16qbak"/><path class="w_q_buz-q"/><path class="zar5c9-1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-drugs-pill"} {...others} />);
}

export default Component;
