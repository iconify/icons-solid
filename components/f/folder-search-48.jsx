import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwypsp5ub.css';
import '../../css/g/g14r5ubhu.css';
import '../../css/d/dexi_790w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bwypsp5ub"/><path class="g14r5ubhu"/><path class="dexi_790w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-search-48"} {...others} />);
}

export default Component;
