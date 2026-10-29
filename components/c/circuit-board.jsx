import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkpbzobdj.css';
import '../../css/h/h2tb7nb8c.css';
import '../../css/r/rnieyxbfp.css';
import '../../css/y/ypqj_jxau.css';
import '../../css/e/eqc9114pc.css';
import '../../css/z/zjeb8iy3t.css';
import '../../css/s/se-57gbrf.css';
import '../../css/t/t1sknxbpx.css';
import '../../css/a/a7mquebop.css';
import '../../css/j/jlqn_ebvh.css';
import '../../css/e/ebb-2rqxq.css';
import '../../css/z/zctwe2ieu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bkpbzobdj wm-shadow"/><path class="h2tb7nb8c wm-k"/><path class="rnieyxbfp wm-k"/><path class="wm-k ypqj_jxau"/><path class="eqc9114pc wm-k"/><path class="wm-k zjeb8iy3t"/><path class="se-57gbrf wm-shine"/><path class="t1sknxbpx wm-k"/><path class="a7mquebop wm-k"/><path class="jlqn_ebvh wm-k"/><path class="ebb-2rqxq wm-k"/><path class="wm-a zctwe2ieu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:circuit-board"} {...others} />);
}

export default Component;
