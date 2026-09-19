import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/y/yozc07cpt.css';
import '../../css/v/vfkibrbfi.css';
import '../../css/e/ef4d19eyw.css';
import '../../css/q/qkjx3xb9z.css';
import '../../css/a/a4mg91bkm.css';
import '../../css/d/ddriu0bfb.css';
import '../../css/o/ol6m0gbhv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="yozc07cpt"/><path class="vfkibrbfi"/><path class="ef4d19eyw"/><path class="qkjx3xb9z"/><path class="a4mg91bkm"/><path class="ddriu0bfb"/><path class="ol6m0gbhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cross-ring"} {...others} />);
}

export default Component;
