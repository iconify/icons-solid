import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlqf_zjuo.css';
import '../../css/x/xnk1gt9lb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wlqf_zjuo"/><path class="xnk1gt9lb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:file-word"} {...others} />);
}

export default Component;
