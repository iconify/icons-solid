import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dh6p_1bdk.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dh6p_1bdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:tree-broadleaved"} {...others} />);
}

export default Component;
