import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bs5ad85nx.css';
import '../../css/d/d6rwj94cj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bs5ad85nx"/><path class="d6rwj94cj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:search-outline"} {...others} />);
}

export default Component;
