import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xyjtgccot.css';
import '../../css/g/g9wje9pgu.css';
import '../../css/t/txd2vrbwz.css';
import '../../css/i/i7w4p8bfa.css';
import '../../css/u/u3d82cckd.css';
import '../../css/c/cpcm_cbdw.css';
import '../../css/u/uko6bzd7v.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="xyjtgccot"><path class="g9wje9pgu"/><path clip-rule="evenodd" class="txd2vrbwz"/><path class="i7w4p8bfa"/><path clip-rule="evenodd" class="u3d82cckd"/></g><path clip-rule="evenodd" class="cpcm_cbdw"/><path clip-rule="evenodd" class="uko6bzd7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:rewind"} {...others} />);
}

export default Component;
