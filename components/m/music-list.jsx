import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zhz480mys.css';
import '../../css/h/hik6t5bjj.css';
import '../../css/a/a70dg9b6x.css';
import '../../css/s/s8toqrbmk.css';
import '../../css/g/gamyhpwcv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="zhz480mys"/><path class="hik6t5bjj"/><path class="a70dg9b6x"/><path class="s8toqrbmk"/><path class="gamyhpwcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:music-list"} {...others} />);
}

export default Component;
