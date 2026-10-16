import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1472bbsx.css';
import '../../css/a/ao77iybri.css';
import '../../css/l/l6r9phbzx.css';
import '../../css/h/hjweu_bvz.css';
import '../../css/k/kiormob3f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n1472bbsx"/><path class="ao77iybri"/><path class="l6r9phbzx"/><path class="hjweu_bvz"/><path class="kiormob3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wellhead-48-bold"} {...others} />);
}

export default Component;
