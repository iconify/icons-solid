import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g6gq_0b-j.css';
import '../../css/s/sj2ti4jlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g6gq_0b-j"/><path class="sj2ti4jlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbells-2-linear"} {...others} />);
}

export default Component;
