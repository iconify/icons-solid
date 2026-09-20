import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpjo1n7rm.css';
import '../../css/a/a1gawlb3a.css';
import '../../css/g/gyy97vb0k.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="cpjo1n7rm"/><path class="a1gawlb3a"/><path class="gyy97vb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:map"} {...others} />);
}

export default Component;
