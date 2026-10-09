import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mqcl30bsu.css';
import '../../css/x/x5baurw3f.css';
import '../../css/o/o1id5zqkj.css';
import '../../css/e/eppinxb0s.css';
import '../../css/o/oz0-7c0kb.css';
import '../../css/q/q8jz89bok.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mqcl30bsu"/><path class="x5baurw3f"/><path class="o1id5zqkj"/><path class="eppinxb0s"/><path class="oz0-7c0kb"/><path class="q8jz89bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pagoda-48-bold"} {...others} />);
}

export default Component;
