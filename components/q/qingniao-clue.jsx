import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shfrclbgd.css';
import '../../css/q/q6p-x2blr.css';
import '../../css/o/okx76p-5g.css';
import '../../css/d/d9b0gub2o.css';
import '../../css/u/ug997tm-v.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="shfrclbgd"/><path clip-rule="evenodd" class="q6p-x2blr"/><path clip-rule="evenodd" class="okx76p-5g"/><path class="d9b0gub2o"/><path clip-rule="evenodd" class="ug997tm-v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:qingniao-clue"} {...others} />);
}

export default Component;
