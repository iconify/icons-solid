import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qiasnzb7m.css';
import '../../css/k/kai3g5bwf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qiasnzb7m"/><path class="kai3g5bwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:taxi"} {...others} />);
}

export default Component;
