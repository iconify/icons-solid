import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo68ar.css';
import '../../css/q/qa-o7h.css';
import '../../css/e/ewvm5y.css';
import '../../css/k/kullsj.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo68ar qa-o7h"/><path class="ewvm5y qa-o7h"/><path class="kullsj qa-o7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:grid-3"} {...others} />);
}

export default Component;
