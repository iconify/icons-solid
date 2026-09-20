import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv_7fi_bz.css';
import '../../css/e/e786ljbfh.css';
import '../../css/e/e_raf5bng.css';
import '../../css/t/tnzbekbkh.css';
import '../../css/a/ap9xvzh4n.css';
import '../../css/b/bs3r2qorp.css';
import '../../css/z/z730bxfdm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/o/o2o112n2e.css';
import '../../css/l/lwqnevb4e.css';
import '../../css/j/jk7sj_bab.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cv_7fi_bz"/><path class="e786ljbfh"/><g transform="matrix(-1 0 0 1 72 0)" class="e_raf5bng"><path class="tnzbekbkh"/><path class="ap9xvzh4n"/><circle class="bs3r2qorp"/><path class="z730bxfdm"/></g><g transform="matrix(-1 0 0 1 72 0)" class="jn8qy4bru"><path class="o2o112n2e"/><path class="lwqnevb4e"/><circle class="bs3r2qorp"/><path class="jk7sj_bab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-in-manual-wheelchair-dark-skin-tone-facing-right"} {...others} />);
}

export default Component;
