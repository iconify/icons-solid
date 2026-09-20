import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cyvece18b.css';
import '../../css/b/be5vpxepo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cyvece18b"/><path class="be5vpxepo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:concert-microphone"} {...others} />);
}

export default Component;
