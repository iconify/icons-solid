import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jmj-ml67i.css';
import '../../css/l/l1d-l3bua.css';
import '../../css/a/af71ghbky.css';
import '../../css/x/xw1fztk-d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jmj-ml67i"/><path class="l1d-l3bua"/><path class="af71ghbky"/><path class="xw1fztk-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:deeplink"} {...others} />);
}

export default Component;
