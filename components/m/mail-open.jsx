import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/irt5l-b5w.css';
import '../../css/y/yx4rxh_0m.css';
import '../../css/u/unhfirttg.css';
import '../../css/k/kr4apibhv.css';
import '../../css/r/r51g0_mcb.css';
import '../../css/u/uomh9ebpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="irt5l-b5w wm-shadow"/><path class="yx4rxh_0m"/><path class="unhfirttg"/><path class="kr4apibhv"/><path class="r51g0_mcb wm-shine"/><path class="uomh9ebpq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:mail-open"} {...others} />);
}

export default Component;
