import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mab2rwb6t.css';
import '../../css/q/qv3mdbcpi.css';
import '../../css/q/q3s-uuc5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="mab2rwb6t"/><path class="qv3mdbcpi"/><path clip-rule="evenodd" class="q3s-uuc5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suspension-x-duotone"} {...others} />);
}

export default Component;
