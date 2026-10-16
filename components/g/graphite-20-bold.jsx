import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g31-57k7t.css';
import '../../css/b/b35547tna.css';
import '../../css/l/l-5yedzfg.css';
import '../../css/j/j8eet4jdx.css';
import '../../css/w/wdl6pacqh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g31-57k7t"/><path class="b35547tna"/><path class="l-5yedzfg"/><path class="j8eet4jdx"/><path class="wdl6pacqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graphite-20-bold"} {...others} />);
}

export default Component;
