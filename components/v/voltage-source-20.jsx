import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6ncrt0qq.css';
import '../../css/j/j6-8hdc3j.css';
import '../../css/q/q24aqk9up.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k6ncrt0qq"/><path class="j6-8hdc3j"/><path class="q24aqk9up"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:voltage-source-20"} {...others} />);
}

export default Component;
