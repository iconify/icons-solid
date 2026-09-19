import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqcz19bjb.css';
import '../../css/l/l-gopggdg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="uqcz19bjb"/><path class="l-gopggdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-touch-hand-2"} {...others} />);
}

export default Component;
