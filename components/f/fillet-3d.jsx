import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/duqea048n.css';
import '../../css/d/d07z4xb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="duqea048n"/><path class="d07z4xb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fillet-3d"} {...others} />);
}

export default Component;
