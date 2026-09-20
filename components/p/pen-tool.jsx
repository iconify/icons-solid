import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yxeb9simy.css';
import '../../css/t/twg-mbk-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="yxeb9simy"/><path class="twg-mbk-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pen-tool"} {...others} />);
}

export default Component;
