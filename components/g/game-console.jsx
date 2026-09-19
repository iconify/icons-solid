import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chavfkb0d.css';
import '../../css/b/bxegycsht.css';
import '../../css/p/pbo4fkb3v.css';
import '../../css/q/qhsic4b0m.css';
import '../../css/w/wq4p0r7-p.css';
import '../../css/h/huigcwf6g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="chavfkb0d"/><path class="bxegycsht"/><path class="pbo4fkb3v"/><rect class="qhsic4b0m"/><circle class="wq4p0r7-p"/><circle class="huigcwf6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:game-console"} {...others} />);
}

export default Component;
