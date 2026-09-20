import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oo63pfbjq.css';
import '../../css/w/weqsqjbvf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oo63pfbjq"/><path clip-rule="evenodd" class="weqsqjbvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:youtube-16"} {...others} />);
}

export default Component;
