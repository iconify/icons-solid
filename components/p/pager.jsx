import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sb-u7hbtr.css';
import '../../css/n/n7nnzhblg.css';
import '../../css/e/e5edqev6a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="sb-u7hbtr"/><path class="n7nnzhblg"/><path class="e5edqev6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:pager"} {...others} />);
}

export default Component;
