import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcphm1b1a.css';
import '../../css/q/qr8v-fsjr.css';
import '../../css/n/na3qbybwq.css';
import '../../css/x/x02k33bom.css';
import '../../css/s/sa4l94btj.css';
import '../../css/y/ypz4v_41x.css';
import '../../css/s/sjkdkgb1n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bcphm1b1a"/><path class="qr8v-fsjr"/><path class="na3qbybwq"/><path class="x02k33bom"/><path class="sa4l94btj"/><path class="ypz4v_41x"/><path class="sjkdkgb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:fire-extinguisher"} {...others} />);
}

export default Component;
