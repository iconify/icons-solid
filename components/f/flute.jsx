import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdx9xlb6g.css';
import '../../css/t/tkjxii01y.css';
import '../../css/x/x46h5dbea.css';
import '../../css/n/n45l1c27o.css';
import '../../css/g/g8j7--9du.css';
import '../../css/w/wqrt91bmj.css';
import '../../css/d/d-b04hbcb.css';
import '../../css/x/xk_ec3jsa.css';
import '../../css/w/wui9lsbyp.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gdx9xlb6g"/><path class="tkjxii01y"/><path class="x46h5dbea"/><circle class="n45l1c27o"/><circle class="g8j7--9du"/><circle class="wqrt91bmj"/><circle class="d-b04hbcb"/><path class="xk_ec3jsa"/><path class="wui9lsbyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flute"} {...others} />);
}

export default Component;
