import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wn2j90btw.css';
import '../../css/x/xiqk_sphk.css';
import '../../css/n/nnw99cbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wn2j90btw"/><path class="xiqk_sphk"/><path class="nnw99cbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rocket"} {...others} />);
}

export default Component;
