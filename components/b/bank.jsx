import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yh9vutbpe.css';
import '../../css/r/r4h8hkbqs.css';
import '../../css/u/u2qvwgb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yh9vutbpe"/><path class="r4h8hkbqs"/><path class="u2qvwgb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bank"} {...others} />);
}

export default Component;
