import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v0rzmlrzf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><polyline points="8.25 2.75 2.75 2.75 2.75 13.25 13.25 13.25 13.25 7.75"/><path class="v0rzmlrzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:link-external"} {...others} />);
}

export default Component;
