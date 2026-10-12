import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp687lbvu.css';
import '../../css/l/lbcm5baeb.css';
import '../../css/q/q2wkkh6jj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hp687lbvu"/><path class="lbcm5baeb"/><path class="q2wkkh6jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:directions-20-bold"} {...others} />);
}

export default Component;
