import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_fp5xfkt.css';
import '../../css/b/begs6-bpt.css';
import '../../css/x/x0ntp389p.css';
import '../../css/f/fuuvgbcxy.css';
import '../../css/l/lpowxxrtt.css';
import '../../css/z/zpsyk8qlw.css';
import '../../css/l/lad2-rbdy.css';
import '../../css/k/ko9q05_gd.css';
import '../../css/f/ff7b4ab9l.css';
import '../../css/e/esaqbacdn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l_fp5xfkt"/><path class="begs6-bpt"/><path class="x0ntp389p"/><path class="fuuvgbcxy"/><path class="lpowxxrtt"/><path class="zpsyk8qlw"/><path class="lad2-rbdy"/><path class="ko9q05_gd"/><path class="ff7b4ab9l"/><path class="esaqbacdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:glasses-2"} {...others} />);
}

export default Component;
