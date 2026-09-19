import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qeu_byb_m.css';
import '../../css/i/ixsc2bcry.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qeu_byb_m"/><path class="ixsc2bcry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-up-02"} {...others} />);
}

export default Component;
