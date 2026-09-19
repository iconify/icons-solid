import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_brepse.css';
import '../../css/k/kk_0dtxfg.css';
import '../../css/j/jfk2sab_g.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="yv_brepse"/><path class="kk_0dtxfg"/><path class="jfk2sab_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:check-circle-twotone"} {...others} />);
}

export default Component;
