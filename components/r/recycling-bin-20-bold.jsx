import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7css8qyx.css';
import '../../css/t/t3qrchbmg.css';
import '../../css/x/xlefwjb-d.css';
import '../../css/i/ii8kgdb-j.css';
import '../../css/l/lshrqm29f.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u7css8qyx"/><path class="t3qrchbmg"/><path class="xlefwjb-d"/><path class="ii8kgdb-j"/><path class="lshrqm29f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:recycling-bin-20-bold"} {...others} />);
}

export default Component;
