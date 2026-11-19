import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wk-sf0bqw.css';
import '../../css/b/bn9byo-4k.css';
import '../../css/s/s4m08qbty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wk-sf0bqw"/><path class="bn9byo-4k"/><path class="s4m08qbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earbuds-left"} {...others} />);
}

export default Component;
