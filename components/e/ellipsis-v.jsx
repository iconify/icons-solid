import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty_ooxbvp.css';
import '../../css/t/tof83qbtg.css';
import '../../css/k/kgj1lsauv.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ty_ooxbvp"/><circle class="tof83qbtg"/><circle class="kgj1lsauv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:ellipsis-v"} {...others} />);
}

export default Component;
