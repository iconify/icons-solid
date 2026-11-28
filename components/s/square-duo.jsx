import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nlpsal7ej.css';
import '../../css/m/mtg_mtnil.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nlpsal7ej secondary"/><path class="mtg_mtnil primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:square-duo"} {...others} />);
}

export default Component;
