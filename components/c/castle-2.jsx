import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kndxs4x0z.css';
import '../../css/j/j-nnq38ga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="kndxs4x0z"/><path class="j-nnq38ga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:castle-2"} {...others} />);
}

export default Component;
