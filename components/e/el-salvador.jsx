import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjut-nbll.css';
import '../../css/d/d1x_6zbkv.css';
import '../../css/i/i9ea6ipsb.css';
import '../../css/i/irxfsrb2w.css';
import '../../css/d/dwid0nbtw.css';
import '../../css/q/qnri6vbsf.css';
import '../../css/x/x8wk83nhe.css';
import '../../css/h/hzm683bub.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="yjut-nbll"/><path class="d1x_6zbkv"/><path class="i9ea6ipsb"/><path class="irxfsrb2w"/><path class="dwid0nbtw"/><path class="qnri6vbsf"/><path class="x8wk83nhe"/><path class="hzm683bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:el-salvador"} {...others} />);
}

export default Component;
