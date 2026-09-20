import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o12gz742v.css';
import '../../css/s/sl76bhbtp.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="o12gz742v"/><path class="sl76bhbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:alarmpi"} {...others} />);
}

export default Component;
