import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p4anfmj7x.css';
import '../../css/b/b0bz2xbyx.css';
import '../../css/k/kr7u95b8w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><rect class="p4anfmj7x"/><path class="b0bz2xbyx"/><path class="kr7u95b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:terminal"} {...others} />);
}

export default Component;
