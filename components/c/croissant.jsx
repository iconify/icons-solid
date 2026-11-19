import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whds854dl.css';
import '../../css/h/h9ypzzb2w.css';
import '../../css/y/yyc19gboe.css';
import '../../css/j/jntr0lrls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="whds854dl"/><path class="h9ypzzb2w"/><path class="yyc19gboe"/><path class="jntr0lrls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:croissant"} {...others} />);
}

export default Component;
