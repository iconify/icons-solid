import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ltvp4bbbj.css';
import '../../css/r/r226xsbyq.css';
import '../../css/k/kqj26io4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ltvp4bbbj"/><path class="r226xsbyq"/><path class="kqj26io4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:brain-linear"} {...others} />);
}

export default Component;
