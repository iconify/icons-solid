import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl_vlo1qn.css';
import '../../css/c/cmb2wab2t.css';
import '../../css/e/ez7qb80yj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wl_vlo1qn"/><path class="cmb2wab2t"/><path clip-rule="evenodd" class="ez7qb80yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:vis-query-ppl"} {...others} />);
}

export default Component;
