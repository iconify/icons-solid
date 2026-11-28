import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qz58nqbby.css';
import '../../css/t/tx1xilbkt.css';
import '../../css/u/u0nn1qdyx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="qz58nqbby"/><path class="tx1xilbkt"/><path class="u0nn1qdyx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sword"} {...others} />);
}

export default Component;
