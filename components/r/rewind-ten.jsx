import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfyk-ub-n.css';
import '../../css/h/hbzul7b_q.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="xfyk-ub-n"/><path class="hbzul7b_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:rewind-ten"} {...others} />);
}

export default Component;
