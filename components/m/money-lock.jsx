import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/suws22yje.css';
import '../../css/h/hhk78obsx.css';
import '../../css/k/kfw9gf8gq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="suws22yje"/><path class="hhk78obsx"/><path class="kfw9gf8gq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-lock"} {...others} />);
}

export default Component;
