import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q97gsbzbr.css';
import '../../css/y/y5ka71p9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q97gsbzbr"/><path class="y5ka71p9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:birthday-cake"} {...others} />);
}

export default Component;
