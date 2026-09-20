import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qygoz3cqa.css';
import '../../css/h/hz0arng4r.css';
import '../../css/z/z94y4tnka.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qygoz3cqa"/><path class="hz0arng4r"/><path class="z94y4tnka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:pen-1"} {...others} />);
}

export default Component;
