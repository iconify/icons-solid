import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lu_eoknua.css';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/c2ykm_hjk.css';
import '../../css/d/d_4vpl5bl.css';
import '../../css/e/ehmv4pb-w.css';
import '../../css/p/pwfa8ufqz.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGJ5kDdewH" class="lu_eoknua"/></defs><g class="in9d5ac6n"><path class="c2ykm_hjk"/><use href="#SVGJ5kDdewH"/><use href="#SVGJ5kDdewH"/><path class="d_4vpl5bl"/><path class="ehmv4pb-w"/><path class="pwfa8ufqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:database"} {...others} />);
}

export default Component;
