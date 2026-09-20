import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/ainx7sb4x.css';
import '../../css/r/rs974646j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="ainx7sb4x"/><path class="rs974646j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:terminal"} {...others} />);
}

export default Component;
