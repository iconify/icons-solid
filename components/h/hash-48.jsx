import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psemm7bpq.css';
import '../../css/y/yeivt_bil.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="psemm7bpq"/><path class="yeivt_bil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hash-48"} {...others} />);
}

export default Component;
