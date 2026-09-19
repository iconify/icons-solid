import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/p/pyaoer-ho.css';
import '../../css/v/vc7kmr92z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="pyaoer-ho"/><path class="vc7kmr92z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:temperature-down"} {...others} />);
}

export default Component;
