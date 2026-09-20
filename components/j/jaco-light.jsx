import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn23hpbkx.css';
import '../../css/v/vnr755bor.css';
import '../../css/s/sel3n_zfh.css';
import '../../css/f/fygbm3b7s.css';
import '../../css/c/cl9a964ll.css';

const viewBox = {"width":1024,"height":1024};
const content = `<rect class="mn23hpbkx"/><path class="vnr755bor"/><path class="sel3n_zfh"/><path class="fygbm3b7s"/><circle class="cl9a964ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jaco-light"} {...others} />);
}

export default Component;
