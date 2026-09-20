import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jxoyled8w.css';
import '../../css/r/r5wn8pbwo.css';
import '../../css/c/ct4i-fb4t.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jxoyled8w"/><path class="r5wn8pbwo"/><path class="ct4i-fb4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:world-cross-bold"} {...others} />);
}

export default Component;
