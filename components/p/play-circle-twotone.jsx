import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/k/knohed40f.css';
import '../../css/z/z23l_ofcq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="knohed40f"/><path class="z23l_ofcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:play-circle-twotone"} {...others} />);
}

export default Component;
