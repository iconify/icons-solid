import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i0uohk9ph.css';
import '../../css/h/h3_nobb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="i0uohk9ph"/><path class="h3_nobb-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:circus-tent"} {...others} />);
}

export default Component;
