import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i75y9pfrr.css';
import '../../css/o/o57ldx_vu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i75y9pfrr"/><path class="o57ldx_vu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:github"} {...others} />);
}

export default Component;
