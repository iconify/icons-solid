import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nctb2ac4r.css';
import '../../css/h/hmoflfbyj.css';
import '../../css/p/pqut-kb5t.css';
import '../../css/o/ofvdkz2ve.css';
import '../../css/m/mr8m7nbzf.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><g class="nctb2ac4r"><path clip-rule="evenodd" class="hmoflfbyj"/><path class="pqut-kb5t"/></g><path clip-rule="evenodd" class="ofvdkz2ve"/><path class="mr8m7nbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:info-print"} {...others} />);
}

export default Component;
