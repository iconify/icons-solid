import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/a/a-ahklbmq.css';
import '../../css/i/ioh29v_qh.css';
import '../../css/h/h9k680llf.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="a-ahklbmq"/><path class="ioh29v_qh"/><path class="h9k680llf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:trademark-circle-twotone"} {...others} />);
}

export default Component;
