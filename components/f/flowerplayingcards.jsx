import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rebn3pwjb.css';
import '../../css/w/wtj0k5lkq.css';
import '../../css/o/o_syef5zw.css';
import '../../css/b/bhnn5b6zv.css';
import '../../css/j/ji0_f9ztz.css';
import '../../css/v/vallxreha.css';
import '../../css/w/wcdvvcbnp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rebn3pwjb"/><path class="wtj0k5lkq"/><path class="o_syef5zw"/><path class="bhnn5b6zv"/><path class="ji0_f9ztz"/><path class="vallxreha"/><path class="wcdvvcbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:flowerplayingcards"} {...others} />);
}

export default Component;
