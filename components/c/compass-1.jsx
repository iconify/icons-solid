import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/w/wbfmzue4k.css';
import '../../css/x/xfdvzbb0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="wbfmzue4k"/><path class="xfdvzbb0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:compass-1"} {...others} />);
}

export default Component;
