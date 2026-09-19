import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du8w8acry.css';
import '../../css/u/uvnv8obbk.css';
import '../../css/o/ovhv0ac7z.css';
import '../../css/t/t9wka8b-l.css';
import '../../css/n/n214rq6hw.css';
import '../../css/r/rgqh12bzh.css';
import '../../css/j/ju7c8fbwn.css';
import '../../css/o/ov7rl_bkx.css';
import '../../css/e/eknrpbcnt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="du8w8acry"/><path class="uvnv8obbk"/><path class="ovhv0ac7z"/><path class="t9wka8b-l"/><path class="n214rq6hw"/><path class="rgqh12bzh"/><path class="ju7c8fbwn"/><path class="ov7rl_bkx"/><path class="eknrpbcnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:dataproc"} {...others} />);
}

export default Component;
