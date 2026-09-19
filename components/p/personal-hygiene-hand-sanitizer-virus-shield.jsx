import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c8sat0p3t.css';
import '../../css/i/iepbu_waf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c8sat0p3t"/><path class="iepbu_waf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-hand-sanitizer-virus-shield"} {...others} />);
}

export default Component;
