import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hsyz2fbso.css';
import '../../css/s/sj2ti4jlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hsyz2fbso"/><path class="sj2ti4jlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-2-line-duotone"} {...others} />);
}

export default Component;
