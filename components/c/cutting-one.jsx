import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/hhjqois8p.css';
import '../../css/k/kglso4bhq.css';
import '../../css/y/yjajdl9af.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="hhjqois8p"/><path class="kglso4bhq"/><path class="yjajdl9af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:cutting-one"} {...others} />);
}

export default Component;
