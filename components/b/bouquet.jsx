import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k26aysb7a.css';
import '../../css/o/o59b9dj0n.css';
import '../../css/y/yt4x9ybzb.css';
import '../../css/y/yg5-xubab.css';
import '../../css/b/bve_mtedx.css';
import '../../css/h/h121ztn6m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="k26aysb7a"/><path class="o59b9dj0n"/><path class="yt4x9ybzb"/><path class="yg5-xubab"/><path class="bve_mtedx"/><path class="h121ztn6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bouquet"} {...others} />);
}

export default Component;
