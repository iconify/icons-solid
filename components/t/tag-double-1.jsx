import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/n/n_tei_-1x.css';
import '../../css/c/c52okubxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="n_tei_-1x"/><path class="c52okubxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:tag-double-1"} {...others} />);
}

export default Component;
