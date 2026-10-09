import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yu7f3lbhq.css';
import '../../css/f/fzl-y-qur.css';
import '../../css/b/bg9q4obqt.css';
import '../../css/q/qpoqx3b8c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yu7f3lbhq"/><path class="fzl-y-qur"/><path class="bg9q4obqt"/><path class="qpoqx3b8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mic-48-bold"} {...others} />);
}

export default Component;
