import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvuwh_b1o.css';
import '../../css/s/sco41b1mo.css';
import '../../css/k/ku0gyybci.css';
import '../../css/b/b72jh0c6g.css';
import '../../css/o/orrftzb-f.css';
import '../../css/f/f0745kbqm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tvuwh_b1o"/><path class="sco41b1mo"/><path class="ku0gyybci"/><path class="b72jh0c6g"/><path class="orrftzb-f"/><path class="f0745kbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:nightwithstars"} {...others} />);
}

export default Component;
