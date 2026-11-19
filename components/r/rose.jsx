import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j-tmlqbxw.css';
import '../../css/g/gzwfp9bak.css';
import '../../css/j/jhao2ohtb.css';
import '../../css/l/l5ou6hwwk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j-tmlqbxw"/><path class="gzwfp9bak"/><path class="jhao2ohtb"/><path class="l5ou6hwwk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:rose"} {...others} />);
}

export default Component;
