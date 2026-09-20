import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a7blbibjc.css';
import '../../css/k/kqou2tbrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a7blbibjc"/><path class="kqou2tbrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:filter-search"} {...others} />);
}

export default Component;
