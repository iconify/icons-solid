import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0n0vuqmj.css';
import '../../css/s/smrdvmbox.css';
import '../../css/y/y1r7qyzoc.css';
import '../../css/p/p7x7p_b-a.css';
import '../../css/q/qn92t0bgd.css';
import '../../css/l/l42mpzbhx.css';
import '../../css/g/gi7pwvmif.css';
import '../../css/a/aqsv_dbey.css';
import '../../css/c/cpcgvbcxi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0n0vuqmj"/><path class="smrdvmbox"/><path class="y1r7qyzoc"/><path class="p7x7p_b-a"/><path class="qn92t0bgd"/><path class="l42mpzbhx"/><path class="gi7pwvmif"/><path class="aqsv_dbey"/><path class="cpcgvbcxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:leftwritinghand"} {...others} />);
}

export default Component;
