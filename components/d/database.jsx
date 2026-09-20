import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mf56bo8kc.css';
import '../../css/m/m1cjllb3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mf56bo8kc"/><path class="m1cjllb3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:database"} {...others} />);
}

export default Component;
