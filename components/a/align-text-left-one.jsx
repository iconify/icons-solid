import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/n/n0_kkrbrg.css';
import '../../css/i/iu_7h2b0u.css';
import '../../css/n/n_o3cqb8g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="utf5_xbzs"/><path class="n0_kkrbrg"/><path class="iu_7h2b0u"/><path class="n_o3cqb8g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:align-text-left-one"} {...others} />);
}

export default Component;
