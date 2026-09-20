import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsz6ymzym.css';
import '../../css/i/infp_-iqz.css';
import '../../css/t/tkcb4abzj.css';
import '../../css/p/pd0d71b8i.css';
import '../../css/i/ido_hw-bp.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="jsz6ymzym"><path class="infp_-iqz"/><circle class="tkcb4abzj"/></g><circle class="pd0d71b8i"/><path class="ido_hw-bp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-question-mark"} {...others} />);
}

export default Component;
