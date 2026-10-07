import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fza9clw6f.css';
import '../../css/o/otubtw49h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fza9clw6f"/><path class="otubtw49h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:maps-turn-left"} {...others} />);
}

export default Component;
