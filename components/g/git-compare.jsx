import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rxm2ijvwo.css';
import '../../css/h/h373szbjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rxm2ijvwo"/><path class="h373szbjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:git-compare"} {...others} />);
}

export default Component;
