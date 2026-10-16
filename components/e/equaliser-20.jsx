import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue1fycmqr.css';
import '../../css/s/sxiutgm2i.css';
import '../../css/o/ow8i1-xsn.css';
import '../../css/x/xoso30b4v.css';
import '../../css/t/ty1yutnfh.css';
import '../../css/c/c085y7bsm.css';
import '../../css/y/y12b47j8m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ue1fycmqr"/><path class="sxiutgm2i"/><path class="ow8i1-xsn"/><path class="xoso30b4v"/><path class="ty1yutnfh"/><path class="c085y7bsm"/><path class="y12b47j8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:equaliser-20"} {...others} />);
}

export default Component;
