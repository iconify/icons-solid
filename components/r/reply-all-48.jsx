import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdxdnnz1r.css';
import '../../css/p/pggd_gbcs.css';
import '../../css/r/r-m9obb9e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mdxdnnz1r"/><path class="pggd_gbcs"/><path class="r-m9obb9e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:reply-all-48"} {...others} />);
}

export default Component;
