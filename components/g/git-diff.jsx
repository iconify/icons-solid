import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zatn0nbfw.css';
import '../../css/o/o-6d_8bvb.css';
import '../../css/h/hofyi4b8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zatn0nbfw"/><path class="o-6d_8bvb"/><path class="hofyi4b8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:git-diff"} {...others} />);
}

export default Component;
