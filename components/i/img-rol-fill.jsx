import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kre2qy1au.css';
import '../../css/w/wfcz2zsqw.css';
import '../../css/s/sqqtubz-x.css';
import '../../css/j/j7p7q7bda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kre2qy1au"/><path class="wfcz2zsqw"/><path class="sqqtubz-x"/><path class="j7p7q7bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-rol-fill"} {...others} />);
}

export default Component;
