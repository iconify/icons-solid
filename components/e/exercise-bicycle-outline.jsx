import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4mlh1uuk.css';
import '../../css/p/pkcq0m6tt.css';
import '../../css/c/cswztabte.css';
import '../../css/c/ci8uf7-fy.css';
import '../../css/e/e4hr4qbju.css';
import '../../css/c/cmg54dw8h.css';
import '../../css/f/f_d-3kboe.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s4mlh1uuk"/><path clip-rule="evenodd" class="pkcq0m6tt"/><path clip-rule="evenodd" class="cswztabte"/><path class="ci8uf7-fy"/><path class="e4hr4qbju"/><path clip-rule="evenodd" class="cmg54dw8h"/><path clip-rule="evenodd" class="f_d-3kboe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:exercise-bicycle-outline"} {...others} />);
}

export default Component;
