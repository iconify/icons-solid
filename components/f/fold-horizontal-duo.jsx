import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/brizay85j.css';
import '../../css/l/lk6j99brh.css';
import '../../css/e/e3o5kybty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="brizay85j"/><path class="lk6j99brh"/><path class="e3o5kybty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:fold-horizontal-duo"} {...others} />);
}

export default Component;
