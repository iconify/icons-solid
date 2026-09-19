import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/ld7ufs_og.css';
import '../../css/m/mk6mgfuwl.css';
import '../../css/r/rtc4dqblo.css';
import '../../css/w/wartxbcek.css';
import '../../css/o/of73web4m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="ld7ufs_og"/><path class="mk6mgfuwl"/><path class="rtc4dqblo"/><path class="wartxbcek"/><path class="of73web4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:share-one"} {...others} />);
}

export default Component;
