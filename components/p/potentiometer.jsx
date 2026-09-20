import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy6pb5_so.css';
import '../../css/v/v_5-d_bsv.css';
import '../../css/u/uquyg4b5c.css';
import '../../css/f/f93lk7bsb.css';
import '../../css/j/j2id3cc1o.css';
import '../../css/p/p92kehbzj.css';
import '../../css/w/wjjuu-hhi.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qy6pb5_so"/><circle class="v_5-d_bsv"/><path class="uquyg4b5c"/><path class="f93lk7bsb"/><circle class="j2id3cc1o"/><circle class="p92kehbzj"/><path class="wjjuu-hhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:potentiometer"} {...others} />);
}

export default Component;
