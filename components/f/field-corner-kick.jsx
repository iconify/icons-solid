import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/y/yhoot5nfl.css';
import '../../css/v/vjndd9bzl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="yhoot5nfl"/><path class="vjndd9bzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:field-corner-kick"} {...others} />);
}

export default Component;
