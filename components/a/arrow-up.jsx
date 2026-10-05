import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsod67gbj.css';
import '../../css/r/rc7mtqb4o.css';
import '../../css/y/y0wqglbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="rsod67gbj"><path class="rc7mtqb4o"/><path class="y0wqglbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:arrow-up"} {...others} />);
}

export default Component;
