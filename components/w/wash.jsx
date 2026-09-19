import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/n7p_n-oun.css';
import '../../css/i/ia4nbqjlp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="n7p_n-oun"/><path class="ia4nbqjlp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:wash"} {...others} />);
}

export default Component;
