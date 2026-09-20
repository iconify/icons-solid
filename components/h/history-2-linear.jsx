import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c75-_gvco.css';
import '../../css/u/uqhik9b3f.css';
import '../../css/s/svf7bmovx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c75-_gvco"/><path class="uqhik9b3f"/><circle class="svf7bmovx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:history-2-linear"} {...others} />);
}

export default Component;
