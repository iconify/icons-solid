import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qsdfs2b4v.css';
import '../../css/f/fiddms--z.css';
import '../../css/f/fkfuyq4qg.css';
import '../../css/p/p-p9psboo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="building-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="qsdfs2b4v"/><path clip-rule="evenodd" class="fiddms--z"/><path clip-rule="evenodd" class="fkfuyq4qg"/><path class="p-p9psboo"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:building-outline"} {...others} />);
}

export default Component;
