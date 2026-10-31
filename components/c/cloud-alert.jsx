import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9877gb7p.css';
import '../../css/g/gitttzbkh.css';
import '../../css/k/k5cqkmmir.css';
import '../../css/a/a7za05bng.css';
import '../../css/g/gwzm0yb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n9877gb7p wm-k"/><path class="gitttzbkh wm-shine"/><path class="k5cqkmmir wm-shine"/><path class="a7za05bng wm-shine"/><path class="gwzm0yb6j wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:cloud-alert"} {...others} />);
}

export default Component;
