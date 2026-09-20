import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5h_q1b3w.css';
import '../../css/s/sltqfkbzy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5h_q1b3w"/><path class="sltqfkbzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:yam"} {...others} />);
}

export default Component;
