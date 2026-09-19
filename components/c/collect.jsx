import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch0locc9x.css';
import '../../css/z/zn8rj_vhl.css';
import '../../css/k/kd2w3qb4y.css';
import '../../css/c/c0pmpkb0u.css';
import '../../css/o/o77desb4w.css';
import '../../css/i/ikjedrkgh.css';
import '../../css/j/j6xci8bin.css';
import '../../css/b/bhxvpyyxj.css';
import '../../css/s/s_ts08bvt.css';
import '../../css/f/fmdmfsrkj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ch0locc9x"><path class="zn8rj_vhl"/><path class="kd2w3qb4y"/></g><g class="ch0locc9x"><path class="c0pmpkb0u"/><path class="o77desb4w"/></g><g class="ch0locc9x"><path class="ikjedrkgh"/><path class="j6xci8bin"/></g><g class="ch0locc9x"><path class="bhxvpyyxj"/><path class="s_ts08bvt"/></g><circle class="fmdmfsrkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:collect"} {...others} />);
}

export default Component;
