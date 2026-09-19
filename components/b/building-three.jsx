import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pa3guob9q.css';
import '../../css/p/pl1bqabkz.css';
import '../../css/e/eweuc1kpp.css';
import '../../css/d/dja1jdboi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path clip-rule="evenodd" class="pa3guob9q"/><path class="pl1bqabkz"/><path class="eweuc1kpp"/><path class="dja1jdboi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:building-three"} {...others} />);
}

export default Component;
