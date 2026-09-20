import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f3yu5_g7l.css';
import '../../css/s/sq2gbtbfq.css';
import '../../css/f/fqm99lbwq.css';

const viewBox = {"width":646,"height":854};
const content = `<path class="f3yu5_g7l"/><path class="sq2gbtbfq"/><path class="fqm99lbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:ollama-light"} {...others} />);
}

export default Component;
