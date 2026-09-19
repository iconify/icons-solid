import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/ualj8xbvx.css';
import '../../css/t/tcrnivb-g.css';
import '../../css/b/b4xx4tb1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="ualj8xbvx"/><path class="tcrnivb-g"/><path class="b4xx4tb1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-search-01"} {...others} />);
}

export default Component;
