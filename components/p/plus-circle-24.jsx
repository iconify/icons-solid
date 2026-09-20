import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6h96-z2f.css';
import '../../css/z/zj49idy7n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6h96-z2f"/><path class="zj49idy7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:plus-circle-24"} {...others} />);
}

export default Component;
