import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/a/ayfir8bht.css';
import '../../css/z/zt3vbkbuf.css';
import '../../css/b/bqzltrbzi.css';
import '../../css/s/sfspqtj7n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ayfir8bht"/><path class="zt3vbkbuf"/><path class="bqzltrbzi"/><path class="sfspqtj7n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:inbox"} {...others} />);
}

export default Component;
