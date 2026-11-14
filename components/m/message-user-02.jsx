import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kzyp-5brs.css';
import '../../css/f/frphcdcxj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kzyp-5brs"/><path class="frphcdcxj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-user-02"} {...others} />);
}

export default Component;
