import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yismpnbbv.css';
import '../../css/i/i2hk_6_pb.css';
import '../../css/i/iex7obabp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yismpnbbv"/><path class="i2hk_6_pb"/><path class="iex7obabp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:save-plus-filled"} {...others} />);
}

export default Component;
