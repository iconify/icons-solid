import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pel4bdbze.css';
import '../../css/j/j9yjuybdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="pel4bdbze"/><path class="j9yjuybdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tube-diagonal-sharp-two-tone"} {...others} />);
}

export default Component;
