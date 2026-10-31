import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/syss1tggh.css';
import '../../css/i/iotztvbca.css';
import '../../css/e/edezydsxo.css';
import '../../css/j/j254ip-xx.css';
import '../../css/l/l3yaqeb8e.css';
import '../../css/h/hlhdankuo.css';
import '../../css/s/sr3xwwg7p.css';
import '../../css/r/r4zp60b6h.css';
import '../../css/r/rtw2-dbkn.css';
import '../../css/g/gqmw5zb4p.css';
import '../../css/w/w4s6iidyp.css';
import '../../css/n/nvh9ezbpy.css';
import '../../css/b/bhtl40bad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="syss1tggh wm-shadow"/><path class="iotztvbca wm-k"/><path class="edezydsxo wm-k"/><path class="j254ip-xx wm-k"/><path class="l3yaqeb8e wm-k"/><path class="hlhdankuo wm-k"/><path class="sr3xwwg7p wm-shine"/><path class="r4zp60b6h wm-a"/><path class="rtw2-dbkn wm-a"/><path class="gqmw5zb4p wm-a"/><path class="w4s6iidyp wm-a"/><path class="nvh9ezbpy wm-a"/><path class="bhtl40bad wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:coffin"} {...others} />);
}

export default Component;
