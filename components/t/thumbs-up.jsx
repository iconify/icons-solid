import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/atjibysll.css';
import '../../css/h/hbmvtsmai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="atjibysll"/><path class="hbmvtsmai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:thumbs-up"} {...others} />);
}

export default Component;
