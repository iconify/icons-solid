import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0pz4aboj.css';
import '../../css/r/rbz09lbdt.css';
import '../../css/o/o7kgxgb1p.css';
import '../../css/f/ft5vwfbvh.css';
import '../../css/h/hfl410-lm.css';
import '../../css/n/n6d6rnqmj.css';
import '../../css/o/ojbg9cb3l.css';
import '../../css/d/dv0cfebwi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0pz4aboj wm-shadow"/><circle class="rbz09lbdt wm-k"/><path class="o7kgxgb1p wm-k"/><path class="ft5vwfbvh wm-k"/><path class="hfl410-lm wm-shine"/><path class="n6d6rnqmj wm-a"/><path class="ojbg9cb3l wm-s"/><path class="dv0cfebwi wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:bell-off"} {...others} />);
}

export default Component;
