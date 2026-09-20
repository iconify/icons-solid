import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk7j0xbwr.css';
import '../../css/e/etp54qpcg.css';
import '../../css/h/hq1bfqbrr.css';
import '../../css/t/tnzbekbkh.css';
import '../../css/a/ap9xvzh4n.css';
import '../../css/b/bs3r2qorp.css';
import '../../css/z/z730bxfdm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o2o112n2e.css';
import '../../css/l/lwqnevb4e.css';
import '../../css/j/jk7sj_bab.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lk7j0xbwr"/><path class="etp54qpcg"/><g class="hq1bfqbrr"><path class="tnzbekbkh"/><path class="ap9xvzh4n"/><circle class="bs3r2qorp"/><path class="z730bxfdm"/></g><g class="jn8qy4bru"><path class="o2o112n2e"/><path class="lwqnevb4e"/><circle class="bs3r2qorp"/><path class="jk7sj_bab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-in-manual-wheelchair-light-skin-tone"} {...others} />);
}

export default Component;
