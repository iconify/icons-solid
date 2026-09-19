import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/w/wzzwdrbyq.css';
import '../../css/k/ku4vcrbee.css';
import '../../css/k/kihweib1x.css';
import '../../css/k/kg6_jgbrp.css';
import '../../css/e/e4_bzvbch.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><rect class="wzzwdrbyq"/><path class="ku4vcrbee"/><path class="kihweib1x"/><path class="kg6_jgbrp"/><path class="e4_bzvbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:id-card-h"} {...others} />);
}

export default Component;
