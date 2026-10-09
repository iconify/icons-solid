import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w7b81vbqj.css';
import '../../css/w/w_0bcbclm.css';
import '../../css/b/b-kn6cc_o.css';
import '../../css/e/eiz_f0bnm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w7b81vbqj"/><path class="w_0bcbclm"/><path class="b-kn6cc_o"/><path class="eiz_f0bnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-farm-20-bold"} {...others} />);
}

export default Component;
