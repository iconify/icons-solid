import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xarwckbam.css';
import '../../css/x/xakjq2afu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xarwckbam"/><path class="xakjq2afu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:prx"} {...others} />);
}

export default Component;
