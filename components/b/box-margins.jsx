import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f80m4wbpg.css';
import '../../css/u/utpmh3lly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="f80m4wbpg"/><path class="utpmh3lly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:box-margins"} {...others} />);
}

export default Component;
