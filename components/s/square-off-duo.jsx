import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlpsal7ej.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tojrffm3c.css';
import '../../css/n/n0298tbfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlpsal7ej secondary"/><g class="dt0cm9dhy primary"><path class="tojrffm3c"/><path class="n0298tbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-off-duo"} {...others} />);
}

export default Component;
