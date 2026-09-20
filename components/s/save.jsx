import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz542cbqq.css';
import '../../css/r/rv4rin_vb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vz542cbqq"/><path class="rv4rin_vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:save"} {...others} />);
}

export default Component;
