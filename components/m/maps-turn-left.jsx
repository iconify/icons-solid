import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qom_46mgf.css';
import '../../css/o/otubtw49h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qom_46mgf"/><path class="otubtw49h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:maps-turn-left"} {...others} />);
}

export default Component;
