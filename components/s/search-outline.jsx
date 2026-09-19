import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hjw279zux.css';
import '../../css/q/qb9lt7bxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="search-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hjw279zux"/><path class="qb9lt7bxy"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:search-outline"} {...others} />);
}

export default Component;
