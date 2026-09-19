import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lxx50rbdy.css';
import '../../css/v/vugmo3b-s.css';
import '../../css/k/ko5q309hq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="lxx50rbdy"/><path class="vugmo3b-s"/><path class="ko5q309hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vicia-faba"} {...others} />);
}

export default Component;
