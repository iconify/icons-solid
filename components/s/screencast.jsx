import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njoqz0rdx.css';
import '../../css/v/v0ahp5bvo.css';
import '../../css/b/bxqirsbqf.css';
import '../../css/h/h8p6umnvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="njoqz0rdx"/><path class="v0ahp5bvo"/><path class="bxqirsbqf"/><path class="h8p6umnvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:screencast"} {...others} />);
}

export default Component;
