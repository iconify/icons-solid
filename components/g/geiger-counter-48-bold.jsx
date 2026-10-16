import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex_ipjb0f.css';
import '../../css/r/rvkxzn91e.css';
import '../../css/o/oqjoxtvhd.css';
import '../../css/j/jo4gwvdxg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ex_ipjb0f"/><path class="rvkxzn91e"/><path class="oqjoxtvhd"/><path class="jo4gwvdxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:geiger-counter-48-bold"} {...others} />);
}

export default Component;
