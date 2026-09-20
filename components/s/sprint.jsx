import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tecq33bxr.css';
import '../../css/k/krnx4irco.css';
import '../../css/q/qndvb9ebg.css';
import '../../css/a/a2lf980sv.css';

const viewBox = {"width":294.399,"height":121.975,"top":-6.166};
const content = `<path class="tecq33bxr"/><path class="krnx4irco"/><path class="qndvb9ebg"/><path class="a2lf980sv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sprint"} {...others} />);
}

export default Component;
