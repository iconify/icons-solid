import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tdkm5qpke.css';
import '../../css/d/d7hb9m31z.css';
import '../../css/a/a6sw0b_rd.css';
import '../../css/z/zv4skzzua.css';
import '../../css/s/sdgj1mbse.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="tdkm5qpke"/><circle class="d7hb9m31z"/><path class="a6sw0b_rd"/><path class="zv4skzzua"/><path class="sdgj1mbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:radio"} {...others} />);
}

export default Component;
