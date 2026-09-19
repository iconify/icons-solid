import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gx07r35eh.css';
import '../../css/b/be8ghcbcr.css';
import '../../css/l/lxwvxtb5e.css';
import '../../css/w/w9pn7h47z.css';
import '../../css/n/nvf4ydbka.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="gx07r35eh"/><path class="be8ghcbcr"/><path class="lxwvxtb5e"/><path class="w9pn7h47z"/><path class="nvf4ydbka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:game-ps"} {...others} />);
}

export default Component;
