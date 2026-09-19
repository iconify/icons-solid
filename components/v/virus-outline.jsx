import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvstvtsqi.css';
import '../../css/e/ehmjtr_qq.css';
import '../../css/o/oh-gh1bfa.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fvstvtsqi"/><path clip-rule="evenodd" class="ehmjtr_qq"/><path class="oh-gh1bfa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:virus-outline"} {...others} />);
}

export default Component;
