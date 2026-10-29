import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4zbgzw_j.css';
import '../../css/g/gmf5tqbkq.css';
import '../../css/v/vn4kl9bpp.css';
import '../../css/h/hdoe3oe9u.css';
import '../../css/y/yd3rg34hw.css';
import '../../css/t/tonmdfb-v.css';
import '../../css/a/aj029tbcr.css';
import '../../css/r/ro5smsbxs.css';
import '../../css/l/l1byr6b8k.css';
import '../../css/p/pl669ubrm.css';
import '../../css/e/ezuacr5qy.css';
import '../../css/a/an0to-bsw.css';
import '../../css/i/ifwpp7fsx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="o4zbgzw_j wm-k"/><path class="gmf5tqbkq wm-k"/><path class="vn4kl9bpp wm-k"/><path class="hdoe3oe9u wm-k"/><path class="wm-k yd3rg34hw"/><path class="tonmdfb-v wm-k"/><path class="aj029tbcr wm-shine"/><path class="ro5smsbxs wm-a"/><path class="l1byr6b8k wm-a"/><path class="pl669ubrm wm-a"/><path class="ezuacr5qy wm-a"/><path class="an0to-bsw wm-k"/><path class="ifwpp7fsx wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:warehouse"} {...others} />);
}

export default Component;
