import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1o-fsx4d.css';
import '../../css/p/pf54fdcpd.css';
import '../../css/o/otww_sbex.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o1o-fsx4d"/><path class="pf54fdcpd"/><path class="otww_sbex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:git-branch-48-bold"} {...others} />);
}

export default Component;
