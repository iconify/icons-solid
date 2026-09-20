import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah0t1lfzm.css';
import '../../css/u/ueiqpgber.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/z/zxfhicblf.css';
import '../../css/o/o_fcpcc1g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ah0t1lfzm"/><path class="ueiqpgber"/><g class="ij2x_72vy"><path class="zxfhicblf"/><path class="o_fcpcc1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:duplicate"} {...others} />);
}

export default Component;
