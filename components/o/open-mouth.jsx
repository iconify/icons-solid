import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/u/uygbqebyi.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/x/xl6h2r1oj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="uygbqebyi"/><path class="fo4ccr_rl"/><path class="xl6h2r1oj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:open-mouth"} {...others} />);
}

export default Component;
