import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-jozgb6w.css';
import '../../css/v/v7kyj877r.css';
import '../../css/x/x5ianxb9l.css';
import '../../css/e/e38lcjnql.css';
import '../../css/k/k--kz1b0x.css';
import '../../css/r/r-j6hjr6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c-jozgb6w wm-shadow"/><path class="v7kyj877r wm-k"/><path class="wm-k x5ianxb9l"/><path class="e38lcjnql wm-k"/><path class="k--kz1b0x wm-k"/><path class="r-j6hjr6e wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:parentheses"} {...others} />);
}

export default Component;
