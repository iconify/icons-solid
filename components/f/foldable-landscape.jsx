import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wwfqf9bjp.css';
import '../../css/r/r2rg25b2s.css';
import '../../css/f/f8dnxibrd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wwfqf9bjp"/><path class="r2rg25b2s"/><path class="f8dnxibrd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:foldable-landscape"} {...others} />);
}

export default Component;
