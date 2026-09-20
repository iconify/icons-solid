import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/mb_worzxh.css';
import '../../css/a/aoactacpk.css';
import '../../css/v/vfye27i-m.css';
import '../../css/l/lqg6xsq0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="mb_worzxh"/><path class="aoactacpk"/><path class="vfye27i-m"/><path class="lqg6xsq0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:spa"} {...others} />);
}

export default Component;
