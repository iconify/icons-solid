import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqebvetyd.css';
import '../../css/r/rurheh2hl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqebvetyd"/><path class="rurheh2hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:puzzled-line"} {...others} />);
}

export default Component;
