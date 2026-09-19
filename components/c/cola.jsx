import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/pdhpcp1mp.css';
import '../../css/z/zsxor_bfi.css';
import '../../css/j/jhh8vzrpt.css';
import '../../css/h/hmqwdc29b.css';
import '../../css/w/w9tbfibyi.css';
import '../../css/s/swnof9rzw.css';
import '../../css/v/vj0f8tb2g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><path class="pdhpcp1mp"/><path class="zsxor_bfi"/><path class="jhh8vzrpt"/><path class="hmqwdc29b"/><path class="w9tbfibyi"/><path class="swnof9rzw"/><path class="vj0f8tb2g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cola"} {...others} />);
}

export default Component;
