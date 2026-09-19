import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8089ybkd.css';
import '../../css/u/uc-p4fbql.css';

const viewBox = {"width":24,"height":32};
const content = `<g class="cuyn6tgcc"><path class="g8089ybkd"/><path class="uc-p4fbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:map-pin"} {...others} />);
}

export default Component;
