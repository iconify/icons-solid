import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlpsal7ej.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b1-l8_61w.css';
import '../../css/h/huhz9fb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlpsal7ej secondary"/><g class="dt0cm9dhy primary"><path class="b1-l8_61w"/><path class="huhz9fb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-split-bottom-right-duo"} {...others} />);
}

export default Component;
