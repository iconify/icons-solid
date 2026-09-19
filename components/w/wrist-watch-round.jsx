import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahpckbcel.css';
import '../../css/e/e-5v66b_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahpckbcel"/><path class="e-5v66b_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:wrist-watch-round"} {...others} />);
}

export default Component;
