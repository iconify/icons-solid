import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_a8u8b9v.css';
import '../../css/x/xwgviec-g.css';
import '../../css/b/btroue5fn.css';
import '../../css/o/ov69avbru.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="n_a8u8b9v"/><path class="xwgviec-g"/><path class="btroue5fn"/><path class="ov69avbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:message-twotone"} {...others} />);
}

export default Component;
