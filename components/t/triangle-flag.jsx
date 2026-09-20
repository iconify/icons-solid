import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/t2pbxr1sj.css';
import '../../css/y/yqsa81rov.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="t2pbxr1sj"/><path class="yqsa81rov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:triangle-flag"} {...others} />);
}

export default Component;
