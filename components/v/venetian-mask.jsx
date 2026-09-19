import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7f7gcvmv.css';
import '../../css/l/lr6pz8b9h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k7f7gcvmv"/><path class="lr6pz8b9h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:venetian-mask"} {...others} />);
}

export default Component;
