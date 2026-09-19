import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l5l0yeoqo.css';
import '../../css/r/rtm9ribch.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><rect class="l5l0yeoqo"/><path class="rtm9ribch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:grid-nine"} {...others} />);
}

export default Component;
