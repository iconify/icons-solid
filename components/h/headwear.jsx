import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5-ywabzd.css';
import '../../css/n/nehgjcg6r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c5-ywabzd"/><path class="nehgjcg6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:headwear"} {...others} />);
}

export default Component;
