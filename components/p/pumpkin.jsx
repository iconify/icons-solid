import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cnn4d64tb.css';
import '../../css/y/ynvxb_fkj.css';
import '../../css/m/mm331ob-k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="cnn4d64tb"/><path class="ynvxb_fkj"/><path class="mm331ob-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pumpkin"} {...others} />);
}

export default Component;
