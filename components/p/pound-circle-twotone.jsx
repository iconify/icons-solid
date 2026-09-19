import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/x/xc74369tb.css';
import '../../css/b/bvvjoke2f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="xc74369tb"/><path class="bvvjoke2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pound-circle-twotone"} {...others} />);
}

export default Component;
