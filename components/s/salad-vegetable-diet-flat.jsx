import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/luqn46-rw.css';
import '../../css/k/k84pq6c3b.css';
import '../../css/a/apybo0btb.css';
import '../../css/a/amyck9b6z.css';
import '../../css/n/nad-1bcgs.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="luqn46-rw"/><path clip-rule="evenodd" class="k84pq6c3b"/><path clip-rule="evenodd" class="apybo0btb"/><path class="amyck9b6z"/><path clip-rule="evenodd" class="nad-1bcgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:salad-vegetable-diet-flat"} {...others} />);
}

export default Component;
