import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uv8rfdbsi.css';
import '../../css/z/zqeh8f43f.css';
import '../../css/f/f12bh6l_v.css';
import '../../css/v/vq-9xfsdh.css';
import '../../css/o/oa9r9ydqf.css';
import '../../css/b/bbwvj-hgk.css';
import '../../css/z/z44idx9kn.css';
import '../../css/p/p2-t2nkhe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uv8rfdbsi"/><path class="zqeh8f43f"/><path class="f12bh6l_v"/><path class="vq-9xfsdh"/><path class="oa9r9ydqf"/><path class="bbwvj-hgk"/><path class="z44idx9kn"/><path class="p2-t2nkhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:lift-1"} {...others} />);
}

export default Component;
