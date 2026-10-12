import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ht602sbgk.css';
import '../../css/l/lj-4xubzz.css';
import '../../css/y/ywy9y1bau.css';
import '../../css/f/fj6by_bru.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ht602sbgk"/><rect class="lj-4xubzz"/><path class="ywy9y1bau"/><path class="fj6by_bru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:box-shipping"} {...others} />);
}

export default Component;
