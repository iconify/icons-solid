import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jd6rb2bqi.css';
import '../../css/o/ot64qpusw.css';
import '../../css/r/r-wfn_bmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="image-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="jd6rb2bqi"/><path clip-rule="evenodd" class="ot64qpusw"/><path class="r-wfn_bmu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:image-outline"} {...others} />);
}

export default Component;
