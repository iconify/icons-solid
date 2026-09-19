import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/e/esqpz9t_e.css';
import '../../css/v/v12hqbbum.css';
import '../../css/d/d-h-7sb6h.css';
import '../../css/b/bux5e9bue.css';
import '../../css/d/den7wjo8e.css';
import '../../css/f/fqtshzb4h.css';
import '../../css/n/n4gd3aber.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="esqpz9t_e"/><path class="v12hqbbum"/><path class="d-h-7sb6h"/><path class="bux5e9bue"/><path class="den7wjo8e"/><path class="fqtshzb4h"/><path class="n4gd3aber"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:modify-two"} {...others} />);
}

export default Component;
