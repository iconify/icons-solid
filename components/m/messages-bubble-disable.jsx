import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a78n3_bia.css';
import '../../css/r/ry-wgzbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a78n3_bia"/><path class="ry-wgzbnw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:messages-bubble-disable"} {...others} />);
}

export default Component;
