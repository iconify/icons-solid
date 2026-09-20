import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rqg02gbnm.css';
import '../../css/e/e6ihvhb_w.css';
import '../../css/k/kr1ub8ndd.css';
import '../../css/v/vy-d8corm.css';

const viewBox = {"width":24,"height":24};
const content = `<ellipse class="rqg02gbnm"/><path class="e6ihvhb_w"/><path class="kr1ub8ndd"/><path class="vy-d8corm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:toilet-paper"} {...others} />);
}

export default Component;
