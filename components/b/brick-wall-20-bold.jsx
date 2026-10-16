import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjljwei0o.css';
import '../../css/g/ghw7-wbwc.css';
import '../../css/b/b_vy63bbo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cjljwei0o"/><path class="ghw7-wbwc"/><path class="b_vy63bbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brick-wall-20-bold"} {...others} />);
}

export default Component;
