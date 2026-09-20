import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/f/f6f6hflnu.css';
import '../../css/n/nti9kfbvf.css';
import '../../css/h/hgcgqkb2t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="f6f6hflnu"/><path class="nti9kfbvf"/><path class="hgcgqkb2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:brightness-1"} {...others} />);
}

export default Component;
