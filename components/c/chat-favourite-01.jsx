import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wd9-gzb5o.css';
import '../../css/j/jjp9eubkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wd9-gzb5o"/><path class="jjp9eubkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-favourite-01"} {...others} />);
}

export default Component;
