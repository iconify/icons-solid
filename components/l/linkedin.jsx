import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mhxajb.css';
import '../../css/o/oxmpwq.css';
import '../../css/y/yk_wkq.css';
import '../../css/t/teqz3l.css';
import '../../css/q/q5p-eg.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="mhxajb"/><path class="oxmpwq yk_wkq"/><path class="oxmpwq teqz3l"/><path class="oxmpwq q5p-eg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:linkedin"} {...others} />);
}

export default Component;
