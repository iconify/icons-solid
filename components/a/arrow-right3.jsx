import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e30xyqbhl.css';
import '../../css/e/eo16-t4xr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e30xyqbhl"/><path class="eo16-t4xr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:arrow-right3"} {...others} />);
}

export default Component;
