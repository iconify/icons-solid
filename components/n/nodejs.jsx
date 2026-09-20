import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rzgee4bbr.css';
import '../../css/c/c7-e5gb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rzgee4bbr"/><path class="c7-e5gb8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:nodejs"} {...others} />);
}

export default Component;
