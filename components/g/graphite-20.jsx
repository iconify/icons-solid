import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aq6h3ybxy.css';
import '../../css/b/baco2ycuu.css';
import '../../css/v/vh9l09bxe.css';
import '../../css/e/eh3piccoc.css';
import '../../css/d/dnq35mbph.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aq6h3ybxy"/><path class="baco2ycuu"/><path class="vh9l09bxe"/><path class="eh3piccoc"/><path class="dnq35mbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:graphite-20"} {...others} />);
}

export default Component;
