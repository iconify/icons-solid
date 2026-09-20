import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhd0xyb3v.css';
import '../../css/e/egljupb1f.css';
import '../../css/q/q76ly5bjv.css';
import '../../css/y/yo90ibbcp.css';
import '../../css/e/e2lqtgbca.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hhd0xyb3v"/><path class="egljupb1f"/><path class="q76ly5bjv"/><circle class="yo90ibbcp"/><path class="e2lqtgbca"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:balance-scale"} {...others} />);
}

export default Component;
