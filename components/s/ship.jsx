import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gvlxech7j.css';
import '../../css/w/wumm05b8l.css';
import '../../css/x/x3ti3hwhe.css';
import '../../css/k/kbrd_6bhc.css';
import '../../css/s/sfwq2c7di.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="gvlxech7j"/><path class="wumm05b8l"/><path class="x3ti3hwhe"/><path class="kbrd_6bhc"/><path class="sfwq2c7di"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:ship"} {...others} />);
}

export default Component;
