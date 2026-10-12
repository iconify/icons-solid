import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kue253bke.css';
import '../../css/e/exq3z-biz.css';
import '../../css/f/fmws5xbuc.css';
import '../../css/x/x0bcp-bgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kue253bke"/><path class="exq3z-biz"/><path class="fmws5xbuc"/><path class="x0bcp-bgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mountains"} {...others} />);
}

export default Component;
