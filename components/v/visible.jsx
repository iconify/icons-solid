import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/evi1xebbn.css';
import '../../css/y/y6b_cttio.css';
import '../../css/a/aqasqsbwy.css';
import '../../css/k/k3_a_wb4n.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="evi1xebbn"/><path class="y6b_cttio"/><path class="aqasqsbwy"/><path class="k3_a_wb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:visible"} {...others} />);
}

export default Component;
