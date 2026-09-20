import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c9-vhrxfv.css';
import '../../css/v/v0ahp5bvo.css';
import '../../css/k/ko7n8ubhw.css';
import '../../css/h/h8p6umnvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="c9-vhrxfv"/><path class="v0ahp5bvo"/><path class="ko7n8ubhw"/><path class="h8p6umnvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:screencast-filled"} {...others} />);
}

export default Component;
