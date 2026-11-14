import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/ns2jtkb0k.css';
import '../../css/i/ila43kb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ns2jtkb0k"/><path class="ila43kb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:file-dollar"} {...others} />);
}

export default Component;
