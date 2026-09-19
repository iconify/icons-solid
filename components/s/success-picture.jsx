import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t937w3bcg.css';
import '../../css/q/q6u6gfbgw.css';
import '../../css/g/gfo-qw48e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="t937w3bcg"/><path class="q6u6gfbgw"/><path class="gfo-qw48e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:success-picture"} {...others} />);
}

export default Component;
