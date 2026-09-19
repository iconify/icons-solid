import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2agbfbtp.css';
import '../../css/q/qlpwkbctq.css';
import '../../css/c/ca79ulb_a.css';
import '../../css/t/tq_gmsbqd.css';
import '../../css/z/z6q2bfbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2agbfbtp"/><path class="qlpwkbctq"/><path class="ca79ulb_a"/><path class="tq_gmsbqd"/><path class="z6q2bfbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rainbow-half-filled"} {...others} />);
}

export default Component;
