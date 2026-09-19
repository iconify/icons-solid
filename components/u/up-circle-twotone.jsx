import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipdpbnbqq.css';
import '../../css/y/yv_brepse.css';
import '../../css/x/xoqg9nb3m.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ipdpbnbqq"/><path class="yv_brepse"/><path class="xoqg9nb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:up-circle-twotone"} {...others} />);
}

export default Component;
