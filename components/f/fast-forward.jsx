import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/nwoy77b0r.css';
import '../../css/l/l16f_zxlx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="nwoy77b0r"/><path class="l16f_zxlx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:fast-forward"} {...others} />);
}

export default Component;
