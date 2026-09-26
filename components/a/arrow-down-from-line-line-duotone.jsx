import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zrpg8lbei.css';
import '../../css/i/i-ia5xbri.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zrpg8lbei"/><path class="i-ia5xbri"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-from-line-line-duotone"} {...others} />);
}

export default Component;
