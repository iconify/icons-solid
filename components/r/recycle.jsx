import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-7t24r7n.css';
import '../../css/l/lo05ewe1p.css';
import '../../css/k/kt0rreb9c.css';
import '../../css/h/hackyfbjc.css';
import '../../css/x/xkgxc_qjs.css';
import '../../css/o/o5hehfq0q.css';
import '../../css/c/cng9tzboh.css';
import '../../css/h/hm8lgaboo.css';
import '../../css/i/iv-gvabtl.css';
import '../../css/u/upd2b8bsd.css';
import '../../css/h/hhclotbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow x-7t24r7n"/><path class="lo05ewe1p wm-k"/><path class="kt0rreb9c wm-k"/><path class="hackyfbjc wm-k"/><path class="wm-k xkgxc_qjs"/><path class="o5hehfq0q wm-k"/><path class="cng9tzboh wm-k"/><path class="hm8lgaboo wm-k"/><path class="iv-gvabtl wm-k"/><path class="upd2b8bsd wm-k"/><path class="hhclotbiu wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:recycle"} {...others} />);
}

export default Component;
