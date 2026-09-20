import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i4jq_nbjt.css';
import '../../css/r/rpvlrx2fk.css';
import '../../css/c/c3cgqbcmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i4jq_nbjt"/><path class="rpvlrx2fk"/><path class="c3cgqbcmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:camera"} {...others} />);
}

export default Component;
