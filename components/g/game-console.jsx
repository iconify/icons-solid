import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnut4_biv.css';
import '../../css/i/itv7kab7h.css';
import '../../css/q/qxppz3bmj.css';
import '../../css/t/tx4bxklty.css';
import '../../css/d/d27ljhbfy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="hnut4_biv"/><path class="itv7kab7h"/><path class="qxppz3bmj"/><circle class="tx4bxklty"/><circle class="d27ljhbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:game-console"} {...others} />);
}

export default Component;
