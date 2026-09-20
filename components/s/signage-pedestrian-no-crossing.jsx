import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jlfwxcbtv.css';
import '../../css/x/xmbkq6bbj.css';
import '../../css/m/mny2fxb-m.css';
import '../../css/n/n6b_t9v6u.css';
import '../../css/e/ea_0o8bkr.css';
import '../../css/c/cyckwubur.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jlfwxcbtv"/><path class="xmbkq6bbj"/><path class="mny2fxb-m"/><path class="n6b_t9v6u"/><path class="ea_0o8bkr"/><path class="cyckwubur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:signage-pedestrian-no-crossing"} {...others} />);
}

export default Component;
