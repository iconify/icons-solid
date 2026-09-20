import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/urrdfwb0j.css';
import '../../css/b/brut72gzw.css';
import '../../css/d/dpayvaujt.css';
import '../../css/q/qmrapzgid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="urrdfwb0j"/><path class="brut72gzw"/><path class="dpayvaujt"/><path class="qmrapzgid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:news-paper"} {...others} />);
}

export default Component;
