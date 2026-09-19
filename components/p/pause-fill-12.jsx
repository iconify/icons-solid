import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oll5m_usj.css';
import '../../css/b/br3ldgbts.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><rect class="oll5m_usj"/><rect class="br3ldgbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pause-fill-12"} {...others} />);
}

export default Component;
