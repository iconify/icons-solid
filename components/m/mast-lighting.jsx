import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj4co0bsz.css';
import '../../css/a/aaj4a2bie.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="oj4co0bsz"/><path class="aaj4a2bie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:mast-lighting"} {...others} />);
}

export default Component;
