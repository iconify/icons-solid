import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj465u-3t.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bj465u-3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:layout-sidebar-right-off"} {...others} />);
}

export default Component;
