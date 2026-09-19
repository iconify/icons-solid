import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7_ekj_5u.css';
import '../../css/k/keru-tbzh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v7_ekj_5u"/><path class="keru-tbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:vaccine-protection-sanitizer-spray"} {...others} />);
}

export default Component;
