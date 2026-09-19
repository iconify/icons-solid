import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/l/lnyuaxrwt.css';
import '../../css/t/t69oulbwo.css';
import '../../css/a/az25568cs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path clip-rule="evenodd" class="lnyuaxrwt"/><path class="t69oulbwo"/><path class="az25568cs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:neural"} {...others} />);
}

export default Component;
