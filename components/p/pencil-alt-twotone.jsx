import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co3kiq.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/l/l59bcp.css';
import '../../css/e/eeo44p.css';
import '../../css/m/muedyo.css';
import '../../css/s/so-from-56.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="co3kiq qa-o7h taf2xz"/><path class="l59bcp qa-o7h taf2xz"/><path class="eeo44p qa-o7h"/><path class="muedyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:pencil-alt-twotone"} {...others} />);
}

export default Component;
