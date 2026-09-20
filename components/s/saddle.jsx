import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdjqu4-xy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bdjqu4-xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:saddle"} {...others} />);
}

export default Component;
