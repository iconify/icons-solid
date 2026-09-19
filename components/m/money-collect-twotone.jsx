import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k92pv4boj.css';
import '../../css/s/s4zsohksa.css';
import '../../css/x/xc9f067ot.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k92pv4boj"/><path class="s4zsohksa"/><path class="xc9f067ot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:money-collect-twotone"} {...others} />);
}

export default Component;
