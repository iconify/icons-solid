import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_r5ykbmt.css';
import '../../css/g/g2ony-pew.css';
import '../../css/r/rk9rf7bhq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v_r5ykbmt"/><path class="g2ony-pew"/><path class="rk9rf7bhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:purse"} {...others} />);
}

export default Component;
