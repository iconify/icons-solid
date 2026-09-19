import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_z7y2z9p.css';
import '../../css/j/jseh88bsl.css';
import '../../css/v/v58yjbcsq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v_z7y2z9p"/><path class="jseh88bsl"/><path class="v58yjbcsq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:greatbritainflag"} {...others} />);
}

export default Component;
