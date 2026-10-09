import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz_mm6jom.css';
import '../../css/c/c30yugl2g.css';
import '../../css/l/llq1prb2j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cz_mm6jom"/><path class="c30yugl2g"/><path class="llq1prb2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:scaffolding-20"} {...others} />);
}

export default Component;
