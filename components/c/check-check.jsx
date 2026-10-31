import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m-wk_dbel.css';
import '../../css/k/k3fje0_dj.css';
import '../../css/m/mnn2gnb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="m-wk_dbel wm-shadow"/><path class="k3fje0_dj wm-shadow"/><path class="mnn2gnb7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:check-check"} {...others} />);
}

export default Component;
