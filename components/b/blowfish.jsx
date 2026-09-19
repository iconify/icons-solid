import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yy8ct1bwe.css';
import '../../css/w/wrki5ci_w.css';
import '../../css/v/vqf5uebow.css';
import '../../css/p/puz755bxy.css';
import '../../css/t/tmm-avvsh.css';
import '../../css/m/mh4rz39ai.css';
import '../../css/b/be8mi1b6g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yy8ct1bwe"/><path class="wrki5ci_w"/><path class="vqf5uebow"/><path class="puz755bxy"/><path class="tmm-avvsh"/><path class="mh4rz39ai"/><path class="be8mi1b6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blowfish"} {...others} />);
}

export default Component;
