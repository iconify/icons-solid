import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6bji2bnd.css';
import '../../css/y/yw00swbyz.css';
import '../../css/g/galjvgbiw.css';
import '../../css/y/ygt804b4t.css';
import '../../css/j/jxab12ddg.css';
import '../../css/i/i9loxzb9y.css';
import '../../css/v/vv0s4w2yv.css';
import '../../css/h/hhjhwy80y.css';
import '../../css/x/x9u33ubhs.css';
import '../../css/h/hbh8vdkve.css';
import '../../css/x/x1bncacip.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u6bji2bnd wm-shadow"/><path class="wm-k yw00swbyz"/><path class="galjvgbiw wm-k"/><path class="wm-k ygt804b4t"/><path class="jxab12ddg wm-k"/><path class="i9loxzb9y wm-shine"/><path class="vv0s4w2yv wm-k"/><path class="hhjhwy80y wm-a"/><path class="wm-a x9u33ubhs"/><path class="hbh8vdkve wm-a"/><path class="wm-a x1bncacip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:baby-bottle"} {...others} />);
}

export default Component;
