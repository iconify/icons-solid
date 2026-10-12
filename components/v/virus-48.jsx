import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzyoq6bkv.css';
import '../../css/r/rr57krcgz.css';
import '../../css/r/riiqk1bxa.css';
import '../../css/z/z5uz-ibmf.css';
import '../../css/n/nvlccwbyd.css';
import '../../css/z/zdqdt2bgx.css';
import '../../css/z/zfp0hpb3z.css';
import '../../css/i/iz334ybjm.css';
import '../../css/z/zvdo_dbpg.css';
import '../../css/n/nvjj869xn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tzyoq6bkv"/><path class="rr57krcgz"/><path class="riiqk1bxa"/><path class="z5uz-ibmf"/><path class="nvlccwbyd"/><path class="zdqdt2bgx"/><path class="zfp0hpb3z"/><path class="iz334ybjm"/><path class="zvdo_dbpg"/><path class="nvjj869xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:virus-48"} {...others} />);
}

export default Component;
