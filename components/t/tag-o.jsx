import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yob_hi-cq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yob_hi-cq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uiw:tag-o"} {...others} />);
}

export default Component;
