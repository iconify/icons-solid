import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv82l7bbi.css';
import '../../css/r/r_4vozblk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zv82l7bbi"/><path class="r_4vozblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chart-line-filled"} {...others} />);
}

export default Component;
