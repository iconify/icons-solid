import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bddobsb4k.css';
import '../../css/j/jl2yhkqww.css';
import '../../css/b/btg3-9-vx.css';
import '../../css/q/qglkbnbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bddobsb4k"/><path class="jl2yhkqww"/><path class="btg3-9-vx"/><path class="qglkbnbeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:copilot"} {...others} />);
}

export default Component;
