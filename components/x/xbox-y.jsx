import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3eawi-5j.css';
import '../../css/h/hhkijobnc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q3eawi-5j"/><path class="hhkijobnc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:xbox-y"} {...others} />);
}

export default Component;
