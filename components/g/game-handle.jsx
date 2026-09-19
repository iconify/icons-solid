import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/p/pqgcbcbrc.css';
import '../../css/x/x1br9q1lf.css';
import '../../css/b/b9guywupb.css';
import '../../css/o/ohf_mjbft.css';
import '../../css/k/k5a1jgb-g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="pqgcbcbrc"/><path class="x1br9q1lf"/><path class="b9guywupb"/><path class="ohf_mjbft"/><path class="k5a1jgb-g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:game-handle"} {...others} />);
}

export default Component;
