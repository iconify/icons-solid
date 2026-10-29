import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqzl3vb1x.css';
import '../../css/r/r3wjtu_lz.css';
import '../../css/y/yxwgn3sos.css';
import '../../css/x/xuj4ipbgs.css';
import '../../css/g/g96-p3r_f.css';
import '../../css/b/b2ji1uf3v.css';
import '../../css/h/h5-ybjiiz.css';
import '../../css/o/otehjzbux.css';
import '../../css/e/evcmedb6g.css';
import '../../css/v/v5-l1ught.css';
import '../../css/j/jsxy6478c.css';
import '../../css/h/h96yzcbmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqzl3vb1x wm-shadow"/><path class="r3wjtu_lz wm-k"/><path class="wm-k yxwgn3sos"/><path class="wm-k xuj4ipbgs"/><path class="g96-p3r_f wm-k"/><path class="b2ji1uf3v wm-k"/><path class="h5-ybjiiz wm-shine"/><path class="otehjzbux wm-k"/><path class="evcmedb6g wm-k"/><path class="v5-l1ught wm-k"/><path class="jsxy6478c wm-k"/><path class="h96yzcbmd wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:surprised"} {...others} />);
}

export default Component;
