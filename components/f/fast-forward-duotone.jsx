import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qvvkymbgd.css';
import '../../css/i/iz2hkkrwh.css';
import '../../css/e/e3ly_bbmk.css';
import '../../css/q/qew6ru_gy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qvvkymbgd"/><path class="iz2hkkrwh"/><path class="e3ly_bbmk"/><path class="qew6ru_gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:fast-forward-duotone"} {...others} />);
}

export default Component;
