import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw0cxs7kf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nw0cxs7kf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:windmill"} {...others} />);
}

export default Component;
