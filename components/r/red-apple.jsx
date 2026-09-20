import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqcr4rb1k.css';
import '../../css/h/hzpiyvrzz.css';
import '../../css/n/nnbxoqbug.css';
import '../../css/x/x5ki1kb4h.css';
import '../../css/h/hf2vh5bub.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="aqcr4rb1k"/><path class="hzpiyvrzz"/><path class="nnbxoqbug"/><path class="x5ki1kb4h"/><path class="hf2vh5bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:red-apple"} {...others} />);
}

export default Component;
