import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9sfiacif.css';
import '../../css/p/p2ydg9bpk.css';
import '../../css/s/sbxg6bciy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a9sfiacif"/><path class="p2ydg9bpk"/><path class="sbxg6bciy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:travel-bag-2"} {...others} />);
}

export default Component;
