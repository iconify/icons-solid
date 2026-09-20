import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/p63g3mbxh.css';
import '../../css/l/lqdncdb1y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="p63g3mbxh"/><path class="lqdncdb1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:restart-line-duotone"} {...others} />);
}

export default Component;
