import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/baf6r5xsc.css';
import '../../css/f/fpneqjbpl.css';
import '../../css/k/k7qnch2qn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="baf6r5xsc"/><circle class="fpneqjbpl"/><path class="k7qnch2qn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:charging-tariff"} {...others} />);
}

export default Component;
