import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awl_g5bxw.css';
import '../../css/f/fj2f88bnb.css';
import '../../css/s/sqihr-4zl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="awl_g5bxw"/><path class="fj2f88bnb"/><path class="sqihr-4zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:list-tree-48-bold"} {...others} />);
}

export default Component;
