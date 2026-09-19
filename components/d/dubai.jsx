import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yj73g48oj.css';
import '../../css/u/udaafzcol.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/v/vlfpiv6el.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="yj73g48oj"/><path class="udaafzcol"/><path class="ii0wlebwq"/><path class="vlfpiv6el"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dubai"} {...others} />);
}

export default Component;
