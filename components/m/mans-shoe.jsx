import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ecu5bebxb.css';
import '../../css/v/v2no3fbgb.css';
import '../../css/r/r9mkeabmj.css';
import '../../css/v/vhrlosbqo.css';
import '../../css/r/r6ljcctpx.css';
import '../../css/t/t32wbz72t.css';
import '../../css/l/latvtbbuo.css';
import '../../css/k/ktgzw4_sk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ecu5bebxb"/><path class="v2no3fbgb"/><path class="r9mkeabmj"/><path class="vhrlosbqo"/><path class="r6ljcctpx"/><path class="t32wbz72t"/><path class="latvtbbuo"/><path class="ktgzw4_sk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:mans-shoe"} {...others} />);
}

export default Component;
