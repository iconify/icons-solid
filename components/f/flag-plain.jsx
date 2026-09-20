import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e4vs3hbeb.css';
import '../../css/r/rgexfmujc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e4vs3hbeb"/><path class="rgexfmujc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:flag-plain"} {...others} />);
}

export default Component;
