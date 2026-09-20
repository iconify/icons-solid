import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zk2cnabil.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="zk2cnabil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:diamond-alt"} {...others} />);
}

export default Component;
