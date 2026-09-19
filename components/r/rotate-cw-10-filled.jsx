import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_n7dobql.css';
import '../../css/n/nzlfk-b_q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r_n7dobql"/><path class="nzlfk-b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rotate-cw-10-filled"} {...others} />);
}

export default Component;
