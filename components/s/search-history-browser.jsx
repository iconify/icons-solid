import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/igserioka.css';
import '../../css/e/e17q9urcc.css';
import '../../css/z/zzqfdi0hf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="igserioka"/><path class="e17q9urcc"/><path class="zzqfdi0hf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:search-history-browser"} {...others} />);
}

export default Component;
