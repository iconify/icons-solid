import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/iuo1j15dv.css';
import '../../css/k/kh8j8mcrz.css';
import '../../css/f/fr_cepbha.css';
import '../../css/j/jxtx6fbin.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="iuo1j15dv"/><path class="kh8j8mcrz"/><path class="fr_cepbha"/><path class="jxtx6fbin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lightning-cloud"} {...others} />);
}

export default Component;
