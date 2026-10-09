import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aboildb3y.css';
import '../../css/l/lmwyhio7v.css';
import '../../css/s/s41_mub4p.css';
import '../../css/v/v6cvb-w5m.css';
import '../../css/s/suc6gkb7q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aboildb3y"/><path class="lmwyhio7v"/><path class="s41_mub4p"/><path class="v6cvb-w5m"/><path class="suc6gkb7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bulldozer-48-bold"} {...others} />);
}

export default Component;
