import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y54hmmsxp.css';
import '../../css/t/t8a26skit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y54hmmsxp"/><path class="t8a26skit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:layout-dashboard-1"} {...others} />);
}

export default Component;
