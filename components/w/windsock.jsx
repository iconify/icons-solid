import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mhumw6gqn.css';
import '../../css/o/o15o6ybrc.css';
import '../../css/j/jsjx8bc7k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mhumw6gqn"/><path class="o15o6ybrc"/><path class="jsjx8bc7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:windsock"} {...others} />);
}

export default Component;
