import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ohtcu9b3e.css';
import '../../css/v/v9228obrk.css';
import '../../css/n/n4e5_3v8e.css';
import '../../css/k/kj2p9jxqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ohtcu9b3e"/><path class="v9228obrk"/><path class="n4e5_3v8e"/><path class="kj2p9jxqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ship-front"} {...others} />);
}

export default Component;
