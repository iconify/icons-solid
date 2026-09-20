import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kv5x-cwmv.css';
import '../../css/e/eqk6tsbgq.css';
import '../../css/f/fwalanilb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kv5x-cwmv"/><path class="eqk6tsbgq"/><path clip-rule="evenodd" class="fwalanilb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:chef-toque-hat-flat"} {...others} />);
}

export default Component;
