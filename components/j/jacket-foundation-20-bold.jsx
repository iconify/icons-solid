import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3yza3f3o.css';
import '../../css/x/xob25hbzw.css';
import '../../css/v/v-8c-izvt.css';
import '../../css/d/d34tcbbnr.css';
import '../../css/r/r6sg57v8j.css';
import '../../css/p/pzjoa-bjg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j3yza3f3o"/><path class="xob25hbzw"/><path class="v-8c-izvt"/><path class="d34tcbbnr"/><path class="r6sg57v8j"/><path class="pzjoa-bjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:jacket-foundation-20-bold"} {...others} />);
}

export default Component;
