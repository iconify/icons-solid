import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0_vk6n_d.css';
import '../../css/f/fmnqfq9fv.css';
import '../../css/v/vf5hq2kdd.css';
import '../../css/n/nw6x3capc.css';
import '../../css/y/y_tv6wr_t.css';
import '../../css/h/huuajhmrh.css';
import '../../css/y/yl6wnpbbi.css';
import '../../css/l/loce1kbzv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="v0_vk6n_d"/><path class="fmnqfq9fv"/><path class="vf5hq2kdd"/><path class="nw6x3capc"/><path class="y_tv6wr_t"/><circle class="huuajhmrh"/><path class="yl6wnpbbi"/><path class="loce1kbzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flushed-face"} {...others} />);
}

export default Component;
