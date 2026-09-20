import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/e/el-w7n.css';
import '../../css/q/qt-lwl.css';
import '../../css/q/qn6s_n.css';
import '../../css/n/n0tjee.css';
import '../../css/e/e63hbv.css';
import '../../css/s/so-from-66.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-pfv47w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c el-w7n"/><path class="a0m25c qt-lwl"/><path class="a0m25c qn6s_n"/><path class="a0m25c n0tjee"/><path class="a0m25c e63hbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:text-box-multiple"} {...others} />);
}

export default Component;
