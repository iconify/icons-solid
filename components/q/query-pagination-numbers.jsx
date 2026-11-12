import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_xescbfb.css';
import '../../css/a/a3h_uub7j.css';
import '../../css/n/nnb345baj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j_xescbfb"/><path class="a3h_uub7j"/><path class="nnb345baj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:query-pagination-numbers"} {...others} />);
}

export default Component;
