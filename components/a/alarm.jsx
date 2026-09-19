import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsomaxd5w.css';
import '../../css/x/xdcvmib6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rsomaxd5w"/><path class="xdcvmib6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alarm"} {...others} />);
}

export default Component;
