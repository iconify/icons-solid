import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j1k46xb3f.css';
import '../../css/g/g88utob-b.css';
import '../../css/s/so2lxqpnn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="j1k46xb3f"/><path class="g88utob-b"/><path class="so2lxqpnn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:recording-tape-bubble-circle"} {...others} />);
}

export default Component;
